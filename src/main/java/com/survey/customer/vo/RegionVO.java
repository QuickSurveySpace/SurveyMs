package com.survey.customer.vo;

import java.util.Date;

public class RegionVO {
    private int id;//区域ID
    private int companyId;//公司ID
    private String companyName;//公司名称
    private String name;//区域名称
    private String regionImg;//区域图片,公司主页使用 – 不上传默认使用总公司的图片
    private Date createTime;//创建时间

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegionImg() {
        return regionImg;
    }

    public void setRegionImg(String regionImg) {
        this.regionImg = regionImg;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "RegionVO{" +
                "id=" + id +
                ", companyId=" + companyId +
                ", companyName='" + companyName + '\'' +
                ", name='" + name + '\'' +
                ", regionImg='" + regionImg + '\'' +
                '}';
    }
}
