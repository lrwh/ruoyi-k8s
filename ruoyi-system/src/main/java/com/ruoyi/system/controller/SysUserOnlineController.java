package com.ruoyi.system.controller;

import com.ruoyi.common.core.constant.CacheConstants;
import com.ruoyi.common.core.model.LoginUser;
import com.ruoyi.common.core.utils.StringUtils;
import com.ruoyi.common.core.web.controller.BaseController;
import com.ruoyi.common.core.web.domain.AjaxResult;
import com.ruoyi.common.core.web.page.TableDataInfo;
import com.ruoyi.common.log.annotation.Log;
import com.ruoyi.common.log.enums.BusinessType;
import com.ruoyi.common.redis.service.RedisService;
import com.ruoyi.common.security.annotation.RequiresPermissions;
import com.ruoyi.system.domain.SysUserOnline;
import com.ruoyi.system.service.ISysUserOnlineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * 在线用户监控
 * 
 * @author ruoyi
 */
@RestController
@RequestMapping("/online")
public class SysUserOnlineController extends BaseController
{
    @Autowired
    private ISysUserOnlineService userOnlineService;

    @Autowired
    private RedisService redisService;

    @RequiresPermissions("monitor:online:list")
    @GetMapping("/list")
    public TableDataInfo list(String ipaddr, String userName)
    {
        Collection<String> keys = redisService.keys(CacheConstants.LOGIN_TOKEN_KEY + "*");
        List<SysUserOnline> userOnlineList = new ArrayList<SysUserOnline>();
        for (String key : keys)
        {
            LoginUser user = redisService.getCacheObject(key);
            if (StringUtils.isNotEmpty(ipaddr) && StringUtils.isNotEmpty(userName))
            {
                if (StringUtils.equals(ipaddr, user.getIpaddr()) && StringUtils.equals(userName, user.getUsername()))
                {
                    userOnlineList.add(userOnlineService.selectOnlineByInfo(ipaddr, userName, user));
                }
            }
            else if (StringUtils.isNotEmpty(ipaddr))
            {
                if (StringUtils.equals(ipaddr, user.getIpaddr()))
                {
                    userOnlineList.add(userOnlineService.selectOnlineByIpaddr(ipaddr, user));
                }
            }
            else if (StringUtils.isNotEmpty(userName))
            {
                if (StringUtils.equals(userName, user.getUsername()))
                {
                    userOnlineList.add(userOnlineService.selectOnlineByUserName(userName, user));
                }
            }
            else
            {
                userOnlineList.add(userOnlineService.loginUserToUserOnline(user));
            }
        }
        Collections.reverse(userOnlineList);
        userOnlineList.removeAll(Collections.singleton(null));
        return getDataTable(userOnlineList);
    }

    /**
     * 强退用户
     */
    @RequiresPermissions("monitor:online:forceLogout")
    @Log(title = "在线用户", businessType = BusinessType.FORCE)
    @DeleteMapping("/{tokenId}")
    public AjaxResult forceLogout(@PathVariable String tokenId)
    {
        redisService.deleteObject(CacheConstants.LOGIN_TOKEN_KEY + tokenId);
        return AjaxResult.success();
    }
}
