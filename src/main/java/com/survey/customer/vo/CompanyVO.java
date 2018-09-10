package com.survey.customer.vo;

import java.util.Date;

/**
 * 客户基本信息
 */
public class CompanyVO {
    private int id;//客户ID
    private String name;//公司名称
    private String description;//公司介绍
    private String logoImg;//公司log
    private String themeImg;//公司主题图片
    private Date createTime;//创建时间

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLogoImg() {
        return logoImg;
    }

    public void setLogoImg(String logoImg) {
        this.logoImg = logoImg;
    }

    public String getThemeImg() {
        return themeImg;
    }

    public void setThemeImg(String themeImg) {
        this.themeImg = themeImg;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "CompanyVO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", logoImg='" + logoImg + '\'' +
                ", themeImg='" + themeImg + '\'' +
                '}';
    }
}
