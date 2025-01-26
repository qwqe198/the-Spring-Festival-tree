addLayer("A", {
  infoboxes: {
 introBox: {
  title: "成就",
  body(){return "成就页面可以帮助你查看当前的进度,暂时还没做完"},
        },
},
  name:"Achievements",
  symbol:"成就",
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        ach: new Decimal(0),
    }},
    color: "#ffe125",
    resource: "成就", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "11",
            image: "png/cj1.png",
            done() {return player.d.points.gte(1)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得1龙！", 
            textStyle: {'color': '#ABCGEF'},
        },
        12: {
            name: "12",
            image: "png/cj2.png",
            done() {return hasUpgrade('d',13)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "龙凤呈祥！", 
            textStyle: {'color': '#CBFBAB'},
        },
        13: {
            name: "13",
            image: "png/cj3.png",
            done() {return hasUpgrade('d',23)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "我是龙批！",
            textStyle: {'color': '#CFBADD'},
        },
        14: {
            name: "14", 
            image: "png/cj4.png",            
            done() {return hasUpgrade('d',33)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "龙年快乐！",
            textStyle: {'color': '#EDABEA'},
        },
        21: {
            name: "21",
            image: "png/cj5.png",            
            done() {return player.y.points.gte(1)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "玩1秒钟！",
            textStyle: {'color': '#ADCFCC'},
        },
        22: {
            name: "22",   
           image: "png/cj6.png",           
            done() {return player.y.points.gte(604800)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "玩1星期！",
            textStyle: {'color': '#AFDDDB'},
        },
        23: {
            name: "23",  
            image: "png/cj7.png",            
            done() {return player.y.points.gte(20242024)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "2024x10001",
            textStyle: {'color': '#DD99AA'},
        },
        24: {
            name: "24",
            image: "png/cj8.png",            
            done() {return player.f.points.gte(1)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "要炸档了?",
            textStyle: {'color': '#84DBBD'},
        },
        31: {
            name: "31",
            image: "png/cj9.png",                        
            done() {return player.f.points.gte("1e20240000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
        },
        32: {
            name: "32",
            image: "png/cj10.png",                        
            done() {return player.c.points.gte(1)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "/",
            textStyle: {'color': '#ade579'},
        },    
         33: {
            name: "33",
            image: "png/cj11.png",                        
            done() {return  hasUpgrade('c',22)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "0/0",
            textStyle: {'color': '#395acb'},
        },      
        34: {
            name: "34",
            image: "png/cj12.png",                        
            done() {return player.c.points.gte(2024)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "20/24",
            textStyle: {'color': '#d3a5c1'},
        },            
        41: {
            name: "41",
            image: "png/cj14.png",                        
            done() {return player.f.points.gte("1e20240000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
            style() { return { "#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "20px", height: "90px", width: "371px" } },                   
    },
 51: {
            name: "51",
            image: "png/cj15.png",                        
            done() {return player.f.points.gte("1e2024000000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
            style() { return { "#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "20px", height: "90px", width: "371px" } },                   
    },   
 61: {
            name: "61",
            image: "png/cj16.png",                        
            done() {return player.f.points.gte("1e2024000000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
            style() { return { "#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "20px", height: "90px", width: "371px" } },                   
    },     
 71: {
            name: "71",
            image: "png/cj17.png",                        
            done() {return player.f.points.gte("1e2024000000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
            style() { return { "#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "20px", height: "90px", width: "371px" } },                   
    },      
 81: {
            name: "81",
            image: "png/cj18.png",                        
            done() {return player.f.points.gte("1e2024000000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
            style() { return { "#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "20px", height: "90px", width: "371px" } },                   
    },   
 91: {
            name: "91",
            image: "png/cj19.png",                        
            done() {return player.f.points.gte("1e2024000000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
            style() { return { "#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "20px", height: "90px", width: "371px" } },                   
    },                 
   101: {
            name: "101",
            image: "png/cj20.png",                        
            done() {return player.f.points.gte("1e20240000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
        }, 
    102: {
            name: "102",
            image: "png/cj21.png",                        
            done() {return player.f.points.gte("1e20240000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
        },        
     103: {
            name: "103",
            image: "png/cj22.png",                        
            done() {return player.f.points.gte("1e20240000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
        },   
     104: {
            name: "104",
            image: "png/cj23.png",                        
            done() {return player.f.points.gte("1e20240000000")},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "twenty twenty four!!!",
            textStyle: {'color': '#7385ff'},
        },                       
    },
    tabFormat: {
   "成就": {
        content: [ ["infobox","introBox"],
    ["display-text",
      function() {return '您有 ' + player.A.ach + ' 成就!'},
     {"color": "#ffe125", "font-size": "40px", "font-family": "Comic Sans MS"}],
     "blank",
    "achievements",
],
  unlocked(){return true}
},
},
},
)
addLayer("d", {
 infoboxes: {
 introBox: {
  title: "春节快乐！",
  body(){return "大家好！我是QqQe308，又到了春节之际，一个贺岁活动是必不可少的。今年，我带来了这款《2024 春节树》，希望大家能玩得愉快，新年顺顺利利，财源滚滚！这个树共有4+4个层级，每个层级都会还原一个树的内容。<br>层级1：龙，灵感来源：音乐游戏树"},
        },
},
    name: "龙",
    symbol: "龙",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff5555",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "龙", // Name of prestige currency
    baseResource: "春节点", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {exp=new Decimal(0.5)
    if(hasUpgrade('d',31)) exp=exp.mul(tmp.d.drEff6)
  return exp  }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade('d',21)) mult=mult.times(tmp.d.drEff4)
        if(hasMilestone('y',3)) mult=mult.times(player.y.points.max(1))
        if(hasUpgrade('f',11)) mult=mult.times(upgradeEffect('f',11))
        if(hasUpgrade('f',12)) mult=mult.times(upgradeEffect('f',12))
        if(hasUpgrade('f',21)) mult=mult.times(upgradeEffect('f',21))
        if(hasUpgrade('f',22)) mult=mult.times(upgradeEffect('f',22))
        if(hasUpgrade('f',23)) mult=mult.times(upgradeEffect('f',23))
        if(hasUpgrade('f',31)) mult=mult.times(upgradeEffect('f',31))
        if(hasUpgrade('f',32)) mult=mult.times(upgradeEffect('f',32))
        if(hasUpgrade('f',33)) mult=mult.times(upgradeEffect('f',33))
        if(hasUpgrade('c',11)) mult=mult.times(player.c.points.add(2))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp=new Decimal(1)
        if(hasUpgrade('d',22)) exp=exp.add(tmp.d.drEff5)
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for 龙", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    passiveGeneration() {
     mult = new Decimal(0)
     if(hasUpgrade('d',23)) mult = new Decimal(1)
     if(hasUpgrade('c',11)) mult = new Decimal(1) 
     return mult
  },
    layerShown(){return true},
    update(diff) {
     if(!player.devSpeed.eq(0)&&hasUpgrade('d',11)) { player.realTime=player.realTime.add(new Decimal(diff).div(player.devSpeed)) }
    },
    drEff1() {
    dr=player.d.points
    eff=dr.add(2).log(2)
    if(hasUpgrade('d',32)) eff=eff.times(tmp.d.drEff7)
    return eff.min(100)
    },
    drEff2() {
    dr=player.d.points
    eff=dr.pow(2).add(10).log(10).pow(2)
    if(eff.gte(10)) eff = eff.sub(10).pow(0.25).add(10)//sc
    if(hasUpgrade('d',32)) eff=eff.times(tmp.d.drEff7)
    return eff.min(25)
    },
    drEff3() {
    dr=player.d.points
    eff=dr.add(10).log(10).pow(0.5).div(5).add(0.8)
    if(hasUpgrade('d',32)) eff=eff.times(tmp.d.drEff7)
    return eff.min(2)
    },
    drEff4() {
    dr=player.d.points
    eff=dr.add(1).pow(0.2)
    if(hasUpgrade('d',32)) eff=eff.times(tmp.d.drEff7)
    return eff.min(10000)
    },
    drEff5() {
    dr=player.d.points
    eff=dr.add(5).log(5).pow(0.5).div(5).sub(0.2)
    if(hasUpgrade('d',32)) eff=eff.times(tmp.d.drEff7)
    return eff.min(4.25155)
    },
    drEff6() {
    dr=player.d.points
    eff=dr.add(10).log(10).pow(0.5).div(10).add(0.9)
    if(hasUpgrade('d',32)) eff=eff.times(tmp.d.drEff7)
    return eff.min(2)
    },
    drEff7() {
    dr=player.d.points
    eff=dr.add(2).log(2).pow(0.2).div(10).add(0.9)
    return eff.min(1.5)
    },
    tabFormat: { 
     "HappyNewYear": {
      content: [ ["infobox","introBox"],
      "main-display","blank",
      "prestige-button","blank",
      ["display-text",
      function() {if(hasUpgrade('d',11)) return '1.春节点获取量+' + format(tmp.d.drEff1)},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('d',12)) return '2.春节点获取量×' + format(tmp.d.drEff2)},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('d',13)) return '3.春节点获取量^' + format(tmp.d.drEff3)},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('d',21)) return '4.龙获取量×' + format(tmp.d.drEff4)},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('d',22)) return '5.龙获取指数+' + format(tmp.d.drEff5)},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('d',31)) return '6.龙获取量^' + format(tmp.d.drEff6)},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('d',32)) return '7.以上所有效果×' + format(tmp.d.drEff7)},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
      "blank","clickables","blank","upgrades",
     ],},
    },
    upgrades: {
     11:{ title: "龙腾虎跃",
      description: "解锁龙的第一个效果",
      cost:new Decimal(1),
     }, 
     12:{ title: "飞龙在天",
      description: "解锁龙的第二个效果",
      cost:new Decimal(3),
      unlocked() {return hasUpgrade('d',11)},
     }, 
     13:{ title: "龙凤呈祥",
      description: "解锁龙的第三个效果",
      cost:new Decimal(100),
      unlocked() {return hasUpgrade('d',12)},
     }, 
     21:{ title: "卧虎藏龙",
      description: "解锁龙的第四个效果",
      cost:new Decimal(120),
      unlocked() {return hasUpgrade('d',13)},
     }, 
     22:{ title: "生龙活虎",
      description: "解锁龙的第五个效果",
      cost:new Decimal(500),
      unlocked() {return hasUpgrade('d',21)},
     }, 
     23:{ title: "我是龙批",
      description: "每秒自动获取100%重置时可以获得的龙",
      cost:new Decimal(1000),
      unlocked() {return hasUpgrade('d',22)},
     }, 
     31:{ title: "车水马龙",
      description: "解锁龙的第六个效果",
      cost:new Decimal(20240),
      unlocked() {return hasUpgrade('d',23)},
     }, 
     32:{ title: "龙马精神",
      description: "解锁龙的第七个效果",
      cost:new Decimal(208500),
      unlocked() {return hasUpgrade('d',31)},
     }, 
     33:{ title: "龙年快乐",
      description: "解锁第二个层级",
      cost:new Decimal(1e9),
      tooltip:"不！时间墙！",
      unlocked() {return hasUpgrade('d',32)},
     }, 

    41:{ title: "龙→春节点",
      description: "龙增加春节点获取",
      cost:new Decimal("1e120240210"),
         effect() {
        return player.d.points.add(2).log(10) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
   
      unlocked() {return inChallenge("x", 11)},

     },  
    42:{ title: "龙→除夕点",
      description: "龙增加除夕点获取",
      cost:new Decimal("1e121922024"),
         effect() {
        return player.d.points.add(2).log(10).pow(22) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
 
      unlocked() {return inChallenge("x", 11)}, 

     },   
    43:{ title: "龙^春节点",
      description: "龙增加春节点获取指数",
      cost:new Decimal("1e121932024"),
         effect() {
        return player.d.points.add(2).log(10).add(2).log(10).add(2).pow(0.419) },
 effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id)) },
    
      unlocked() {return inChallenge("x", 11)}, 
   
     },   
    },
    clickables: {
     11: {
           title(){return "手机版Qol"},
           display: "点击或按住以自动重置获得龙",
          canClick() {return true},
           onClick() { doReset('d') },
           onHold() { doReset('d') },
        },
    },
})//龙
addLayer("y", {
 infoboxes: {
 introBox: {
  title: "春节快乐！2",
  body(){return "恭喜来到第二层！这里你需要通过春节点获得时间，最终达到31536000秒（即一年）！<br>层级2：年，灵感来源：时间树"},
        },
},
    name: "年",
    symbol: "年",
    position: 1,
    startData() { return {
        unlocked() { return hasUpgrade('d',33)},
		points: new Decimal(0),
		time:new Decimal(0),
    }},
    color: "#ffeeff",
    requires: new Decimal(1e6), 
    resource: "秒",
    baseResource: "春节点", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.5, 
    gainMult() { 
        mult = new Decimal(1)
        if(buyableEffect('y',12).gt(1)) mult=mult.times(buyableEffect('y',12))
        if(hasUpgrade('c',13)) mult=mult.times(player.c.points.add(2))
        if(hasMilestone('y',7)) mult=mult.times(2085)
        if(hasMilestone('y',8)) mult=mult.times(114514)
        if(hasMilestone('y',9)) mult=mult.times(1e69)
        if(hasMilestone('y',10)) mult=mult.times("1e420")
         if(hasChallenge('x',12)) mult=mult.pow(1.0419)
         if(inChallenge('x',12)) mult=mult.pow(1.0419)
         if(hasMilestone('y',11)) mult=mult.pow(1.3229)

         return mult
    },
    gainExp() { 
      exp= new Decimal(0.5)
       return exp
    },
    directMult() { 
        mult = new Decimal(1)
        return mult
    },
    passiveGeneration() {
     mult = new Decimal(0)
     if(hasMilestone('y',2)) mult = new Decimal(1)
     if(hasUpgrade('c',12)) mult = new Decimal(1) 
     return mult
  },
    row: 0, 
    hotkeys: [
        {key: "y", description: "Y： Reset for 年", },
    ],
    layerShown(){ return player.y.unlocked()},
    devSpeedCal() {
     let dev = new Decimal(1)
     if(hasMilestone('y',1)) dev = dev.mul(2)
     if(hasMilestone('y',2)) dev = dev.mul(2)
     if(hasMilestone('y',3)) dev = dev.mul(2)
     if(hasMilestone('y',4)) dev = dev.mul(3)
     if(hasMilestone('y',5)) dev = dev.mul(5)
     if(buyableEffect('y',13).gt(1)) dev=dev.times(buyableEffect('y',13))
     return dev
    },
    update(diff) {
     player.devSpeed=tmp.y.devSpeedCal
    },
    buyables:{ 
    11: {
				title: "购买时间机器 I",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.25, x.mul(1.25).pow(1.25))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {eff=new Decimal(2).pow(x.pow(0.8))
				if(eff.gte(100)) eff = eff.sub(100).pow(0.9).add(100)//sc
				  return eff.min(1000)
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " 秒")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"/20<br>春节点×" + format(data.effect) + "（在龙的效果之后）")
                },
      unlocked() { return hasMilestone('y',0)}, 
      canAfford() {
      return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
      purchaseLimit() {return new Decimal(20)},
       buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
     player[this.layer].points = player[this.layer].points.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                style: {'height':'200px'},
			},
    12: {
				title: "购买时间机器 II",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.35, x.mul(1.35).pow(1.35)).mul(100)
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {eff=new Decimal(2).pow(x.pow(0.75))
				  return eff
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " 秒")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"/10<br>秒×" + format(data.effect))
                },
      unlocked() { return hasMilestone('y',2)}, 
      canAfford() {
      return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
      purchaseLimit() {return new Decimal(10)},
       buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
     player[this.layer].points = player[this.layer].points.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                style: {'height':'200px'},
			},
    13: {
				title: "购买时间机器 III",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.5, x.mul(1.5).pow(1.5)).mul(10000)
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {eff=new Decimal(2).pow(x.pow(0.4))
				if(x.gte(5)) eff=new Decimal(4)
				  return eff
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " 秒")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"/5<br>全局速率×" + format(data.effect))
                },
      unlocked() { return hasMilestone('y',4)}, 
      canAfford() {
      return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
      purchaseLimit() {return new Decimal(5)},
       buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
     player[this.layer].points = player[this.layer].points.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                style: {'height':'200px'},
			},
		   
   },
  milestones: {
   0: {
    requirementDescription: "解锁“年”层级",
    effectDescription() {return "解锁时间机器，耗时 "+formatTime(player.y.time)},
    done() { return player.y.unlocked() },
    onComplete() {player.y.time=player.realTime},
    unlocked() {return true},
   },
   1: {
    requirementDescription: "1秒",
    effectDescription: "游戏全局速率×2",
    done() { return player.y.points.gte(1) },
    unlocked() {return true},
   },
   2: {
    requirementDescription: "1分钟(60秒)",
    effectDescription: "游戏全局速率×2，自动获得100%重置时可以获得的秒，解锁第二个时间机器",
    done() { return player.y.points.gte(60) },
    unlocked() {return hasMilestone('y',1)},
   },
   3: {
    requirementDescription: "1小时(3600秒)",
    effectDescription: "游戏全局速率×2，秒倍增龙获取量",
    done() { return player.y.points.gte(3600) },
    unlocked() {return hasMilestone('y',2)},
   },
   4: {
    requirementDescription: "1天(86400秒)",
    effectDescription: "游戏全局速率×3，解锁第三个时间机器",
    done() { return player.y.points.gte(86400) },
    unlocked() {return hasMilestone('y',3)},
   },
   5: {
    requirementDescription: "1月(2592000秒)",
    effectDescription: "游戏全局速率×5",
    done() { return player.y.points.gte(2592000) },
    unlocked() {return hasMilestone('y',4)},
   },
   6: {
    requirementDescription: "1年(31536000秒)",
    effectDescription: "解锁下一个层级",
    done() { return player.y.points.gte(31536000) },
    unlocked() {return hasMilestone('y',5)},
   },
      7: {
    requirementDescription: "1秒→1e926秒(时间膨胀)",
    effectDescription() { return "秒获取x2085"},
    done() { return player.y.points.gte("1e926") },
   
      unlocked() {return inChallenge("x", 12)},  
   
    
   },
      8: {
    requirementDescription: "1分钟→1e930秒(这不是专业树)",
    effectDescription() { return "秒获取x114514"},
    done() { return player.y.points.gte("1e930") },

      unlocked() {return inChallenge("x", 12)},  

      },
      9: {
    requirementDescription: "1小时→1e934秒(不错)",
    effectDescription() { return "秒获取x1e69"},
    done() { return player.y.points.gte("1e934") },

      unlocked() {return inChallenge("x", 12)},   

   }, 
     10: {
    requirementDescription: "1天→1e971秒(不错^2)",
    effectDescription() { return "秒获取x1e420"},
    done() { return player.y.points.gte("1e971") },

      unlocked() {return inChallenge("x", 12)},   

   },   
  11: {
    requirementDescription: "1月→1e1190秒(为什么现在才有这个)",
    effectDescription() { return "秒获取^1.3229，保留每秒获得1e5%重置时可以获得的炸档点"},
    done() { return player.y.points.gte("1e1190") },
 
      unlocked() {return inChallenge("x", 12)},   

   },    
 12: {
    requirementDescription: "1年→1e1405秒(咕咕咕)",
    effectDescription() { return "咕咕咕"},
    done() { return player.y.points.gte("1e1405") },
   
      unlocked() {return inChallenge("x", 12)},   

   },      
  },
  clickables: {
     11: {
           title(){return "手机版Qol"},
           display: "点击或按住以自动重置获得秒",
          canClick() {return true},
           onClick() { doReset('y') },
           onHold() { doReset('y') },
        },
    },
})//年
addLayer("f", {
 tabFormat: {
         里程碑: {
        buttonStyle() { return { 'color': 'write' } },
        content: [["infobox","introBox"],"infoboxes","main-display","prestige-button","clickables","milestones"],
      },
         升级: {
        buttonStyle() { return { 'color': 'write' } },
        content: [["infobox","introBox"],"infoboxes","main-display","prestige-button","clickables","upgrades"],
      },   
             "HappyNewYear": {
      content: [ ["infobox","introBox"],
      "main-display","blank",
      "prestige-button","blank",
      ["display-text", function() { return '你有' + format(player.f.pzd) + '膨胀点'},
      {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],

"buyables",
     ],},        
    }, 
 infoboxes: {
 introBox: {
  title: "春节快乐！3",
  body(){return "恭喜来到第三层！你在这一层的目标是以最快的速度炸档！<br>层级3：快，灵感来源：…"},
        },
},
    name: "快",
    symbol: "快",
    position: 2,
    startData() { return {
        unlocked() { return hasMilestone('y',6)},
		points: new Decimal(0),
		time: new Decimal(0),
  	pzd: new Decimal(0),
    }},
    color: "#fff444",
    requires: new Decimal(1e50), 
    resource: "炸档点",
    baseResource: "龙", 
    baseAmount() {return player.d.points}, 
    type: "normal", 
    exponent: 0.5, 
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.5)
       return exp
    },
    directMult() { 
        mult = new Decimal(1)
        return mult
    },
    passiveGeneration() {
     mult = new Decimal(0)
     if(hasUpgrade('f',13)) mult = new Decimal(1000)
     if(hasMilestone('y',11)) mult = new Decimal(1000)
     return mult
  },
    row: 0, 
    hotkeys: [
        {key: "f", description: "F： Reset for 快", },
    ],
    layerShown(){ return player.f.unlocked()},
    clickables: {
     11: {
           title(){return "手机版Qol"},
           display: "点击或按住以自动重置获得炸档点",
          canClick() {return true},
           onClick() { doReset('f') },
           onHold() { doReset('f') },
        },
    },
    milestones: {
   0: {
    requirementDescription: "解锁“快”层级",
    effectDescription() {return "耗时 "+formatTime(player.f.time)},
    done() { return player.f.unlocked() },
    onComplete() {player.f.time=player.realTime},
    unlocked() {return true},
   },
    },
   buyables: {
    11: {
    		title: "炸档维度1",
        cost(x) {let a = x.add(1).mul("1e20242024")
                return a}, 
  display(){ return "每次购买获得一个维度1<br>花费:"+format(this.cost())+"<br>数量:"+(getBuyableAmount(this.layer, this.id))  +"/1" },
        canAfford() { return player.f.points.gte(this.cost())},
        effect(x){},
            purchaseLimit() {return new Decimal(1)},  
        buy() {
            player.f.points = player.f.points.sub(this.cost())
           setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) 

        },
        
    },
    
}, 

    upgrades: {
     11:{ title: "11",
      description: "龙获取量乘以炸档点",
      cost:new Decimal(1e12),
      effect() {
        return player.f.points.max(1) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
     }, 
     12:{ title: "12",
      description: "龙获取量乘以炸档点^1.2",
      cost:new Decimal("1e3638424"),
      unlocked() {return hasUpgrade('f',11)},
      effect() {
        return player.f.points.max(1).pow(1.2) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
     }, 
     13:{ title: "13",
      description: "每秒获得1e5%重置时可以获得的炸档点",
      cost:new Decimal("1e20240000"),
      unlocked() {return hasUpgrade('f',12)},
     }, 
     14:{ title: "恭喜通关？",
      description: "恭喜通关?解锁下一个层级",
      cost:new Decimal("1e20240210"),
      unlocked() {return hasUpgrade('f',13)},
     },  
    },
})//快
addLayer("h", {
 infoboxes: {
 introBox: {
  title: "春节快乐第一阶段！4",
  body(){return "恭喜通关！看看你的通关时间吧<br>层级4：乐，灵感来源：？"},
        },
},
    name: "乐",
    symbol: "乐",
    position: 3,
    row:0,
    startData() { return {
        unlocked() { return hasUpgrade('f',14)},
		points: new Decimal(2024),
		time:new Decimal(1e308)
    }},
    color: "#f583a2",
    
    resource: "龙年快乐",
    layerShown(){ return player.h.unlocked()},
   milestones: {
   0: {
    requirementDescription: "恭喜通关第一阶段！",
    effectDescription() {return "累计用时 "+formatTime(player.h.time)},
    done() { return player.h.unlocked() },
    onComplete() {player.h.time=player.realTime},
    unlocked() {return true},
   },
   1: {
    requirementDescription: "30分钟内通关",
    effectDescription: "春节祝福语贺词精选<br>2024，崭新启航，何不心如止水，笑看风云际会。因为了解，所以更美。🌈✨🎉",
    tooltip: "获得称号：龙",
    done() { return player.h.time.lte(1800) },
   },
   2: {
    requirementDescription: "27.5分钟内通关",
    effectDescription: " 🎊2024 年，愿你事业有成，家庭和睦，身体健康，万事如意！🎊",
    tooltip: "获得称号：龙王",
    done() { return player.h.time.lte(1650) },
   },
   3: {
    requirementDescription: "25分钟内通关",
    effectDescription: "烟花响，新春到，短信至，财神笑，祥龙携欢齐祝贺，腾云驾雾把喜召，张灯结彩迎春来，仙鹤纷至福寿高。愿你：身体倍儿棒，吃嘛嘛香，财源广进，事业节节高！",
    tooltip: "获得称号：龙批",
    done() { return player.h.time.lte(1500) },
   },
   4: {
    requirementDescription: "22.5分钟内通关",
    effectDescription: "祥龙贺岁，欢乐祥瑞；瑞气盈门，福满人间；团圆喜乐，家和万事兴；事业有成，前程似锦；身体健康，幸福美满。祝您和家人在 2024 年里，一切顺利，龙年大吉！🎊",
    tooltip: "获得称号：龙神",
    done() { return player.h.time.lte(1350) },
   },
   5: {
    requirementDescription: "20分钟内通关",
    effectDescription: " 祥龙拜年，喜庆洋洋；神龙送福，福气满满；金龙祝你，财气冲天；银龙祝你，好运连连；福龙祝你，幸福安康。愿你在 2024 年，龙腾虎跃，一飞冲天！🌟",
    tooltip: "获得称号：龙年",
    done() { return player.h.time.lte(1200) },
   },
   6: {
    requirementDescription: "1秒内通关",
    effectDescription: "噔 噔 噔 噔噔😡诶诶 芜芜芜😯 诶呀～😍 哒 噔噔噔👿诶诶 芜芜芜😮欸呀😍 噔 噔 噔 噔噔😡诶诶 芜芜芜😯 诶呀😍 欸啊哈🥴😝～欸啊哈🥴😝～欸啊哈🥴😝～欸啊哈🥴😝～走↘咯↗～～～～～～～→～～～～～～↘～～～～～～🥁🥁🥁🥁咦↘～～～～咦↗～～～咦↘～～～～咦↗～～～咦↘～～～～咦↗～～～≒∯^～&;？-≮）ɑːゅ^O—— 啊😲～啊😲～阿弟😍～阿弟😍～哦呃哦😋～哦誒誒😄～欸呦欸呦🤓～single day☺～️诶～all night😋～ 哎☺️～爱爱🥴😻～爱爱🥴😻～ 啊🥵～啊🥵～阿弟🤤～阿弟🤤～哦呃哦🙄～哦誒誒😵～哎哟哎哟😩～滴滴噔噔😧＊oh🤪!～～～～ 曾😇～曾😇～曾😇～曾😇～～～～ 哦🥺～哦🥺～我嗯你🤫～嗯呃呦唔🥴～️吱呀吱呀😬～吱额吱额😆～欸呦欸呦🤓～single day☺～欸～呃啊😋～呃啊😋～呃啊😋～呃啊😋～ 哦🙄～哦🙄～阿弟😌～阿弟😌～诶啊欸啊啊唔😵～嗯～嗯～撅😳～～～啊😨～↗～～～撅＊≮撅-'jjj^≒≮↗ɑː^——↘ 哦😣～哦😣～我嗯你😒～嗯呃呦唔😖～️吱呀吱呀🙃～吱额吱额🤗～哎哎↑single day😎—欸～嗡—嗡—嗡—嗡～啊↑啊↑阿弟🙂阿弟😗汪🐶～汪汪—汪唔😝鞥～鞥～撅～～给～～——～～___～～嘟———造～摁赖赖～😯哦↗哦↘😔嗯嗯有安～😢恩米恩米～～yeah～～～缺😃嘟↗嘟↗嘟↗欸饿～～嘿（嗯↗↘）😛嘿（嗯↗↘）😝嘿（嗯↗↘）😝唔↗😝欸↘欸→欸→欸↗↗欸↗欸↗欸↑啊啊啊啊啊🙄唔↑唔↑嗲嗲😢球污污污物米↗🤗哦↗哦↘😎我来开个会😯欸缺😜啊哈～啊哈～😛哦欸哎嘿began😋大大√β？？嘿嘎🙀欸嘿哎嘿😆缺搜😢爆💥 啊～🤗啊～🤗阿弟～😬阿弟～😬噢欸噢欸欸～～～哦啊呃哦😊哦欸😨爱爱爱爱爱😍啊～😋啊～🤗啊弟～啊弟😢哦欸哦欸欸🤗爱爱😍滴得↗滴得↘芜↑😆哦哦哦嗯嗯😜嗷嗷～～一一一哦欸哦欸欸🤓啊～😡啊～😡欸哦欸呃🤓哦唉🙄爱爱爱爱爱😋啊～啊～阿弟～阿弟～哦爱哦欸欸🤗爱爱～滴得滴得😻芜↑芭芭😢 欸呀～～～🙄<br>啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥哎哎🤗哎哦哎嗯😋～哦哎🥳爱爱爱爱爱😍啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥哎哎🤗哎哦哎嗯😋～哦哎🥳爱爱爱爱爱😍啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥嗯嗯👿滴嘚滴嘚😈唔😱嘟⬅️嘟↖️嘟⬆️嘟↗️嘟➡️嘟↘️嘟⬇️",
    done() { return player.h.time.lte(1) },
    tooltip: "获得称号：挂哥",
   },
  },
})//乐
addLayer("c", {
 infoboxes: {
 introBox: {
  title: "春节快乐！5",
  body(){return "恭喜来到第5层！这层东西的效果与一般的相反，不过还是增益<br>层级5：除，灵感来源：…"},
        },
},
    name: "除",
    symbol: "除",
    position: 0,
    startData() { return {
        unlocked() { return hasUpgrade('f',14)},
		points: new Decimal(0),
		time: new Decimal(0),
    }},
    color: "#ff5555",
    requires: new Decimal(1e15), 
    resource: "除夕点",
    baseResource: "春节点", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.2, 
    gainMult() { 
        mult = new Decimal(1)
      if(hasUpgrade('c',21)) mult=mult.times(player.c.points.add(2))  
      if(hasUpgrade('c',23)) mult=mult.times(player.d.points.add(2).log(10).add(2).log(10).add(2))  
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.5)
       return exp
    },
    directMult() { 
        mult = new Decimal(1)
 if(hasUpgrade('d',42)) mult=mult.mul(player.d.points.add(2).log(10).pow(22))  
        return mult
    },
    passiveGeneration() {
     mult = new Decimal(0)
     if(hasUpgrade('c',22)) mult = new Decimal(0.0002024) 
     return mult
  },
    row: 1, 
    hotkeys: [
        {key: "c", description: "C： Reset for 除", },
    ],
    layerShown(){ return hasUpgrade('f',14)},
    clickables: {
     11: {
           title(){return "手机版Qol"},
           display: "点击或按住以自动重置获得除夕点",
          canClick() {return true},
           onClick() { doReset('c') },
           onHold() { doReset('c') },
        },
    },
    milestones: {
   0: {
    requirementDescription: "解锁“除”层级",
    effectDescription() {return "耗时 "+formatTime(player.f.time)},
    done() { return player.f.unlocked() },
    onComplete() {player.f.time=player.realTime},
    unlocked() {return hasUpgrade('f',14)},
   },
    },
    upgrades: {
     11:{ title: "11",
      description: "龙获取量基于除夕点减少，保留每秒获得100%的龙的效果",
      cost:new Decimal(1),
      effect() {
        return player.c.points.add(1).pow(0).div(player.c.points.add(2)) },
 effectDisplay() { return "÷"+format(upgradeEffect(this.layer, this.id)) },
     }, 
     12:{ title: "12",
      description: "春节点获取量基于除夕点减少，保留每秒获得100%的秒的效果",
      cost:new Decimal(1),
      effect() {
        return player.c.points.add(1).pow(0).div(player.c.points.add(2)) },
 effectDisplay() { return "÷"+format(upgradeEffect(this.layer, this.id)) },
     },  
     13:{ title: "13",
      description: "秒获取量基于除夕点减少",
      cost:new Decimal(1),
      effect() {
        return player.c.points.add(1).pow(0).div(player.c.points.add(2)) },
 effectDisplay() { return "÷"+format(upgradeEffect(this.layer, this.id)) },
     },   
    21:{ title: "21",
    description: "除夕点获取量基于除夕点减少，解锁一个新升级",
      cost:new Decimal(2),
      effect() {
        return player.c.points.add(1).pow(0).div(player.c.points.add(2)) },
 effectDisplay() { return "÷"+format(upgradeEffect(this.layer, this.id)) },
     },   
    22:{ title: "22",
    description: "每秒获得0.02024%的除夕点",
      cost:new Decimal(0),
        tooltip:"不！又是时间墙！",
       unlocked() {return hasUpgrade('c',21)},
     }, 
   23:{ title: "23",
    description: "龙减少除夕点获取（是时候炸档了？）",
      cost:new Decimal(24),
    effect() {
        return player.c.points.add(1).pow(0).div(player.d.points.add(2).log(10).add(2).log(10).add(2)) },
 effectDisplay() { return "÷"+format(upgradeEffect(this.layer, this.id)) },  

     },   
    31:{ title: "31",
    description: "解锁新层级",
      cost:new Decimal(2024),
    },
    },
})//除
addLayer("x", {
 infoboxes: {
 introBox: {
  title: "春节快乐！6",
  body(){return "恭喜来到第6层！这层有很多挑战<br>             为了让大家过个好年，所以这层的挑战不会重置任何东西<br>层级6：凌日潮汐，灵感来源：phigros"},
        },
},
    name: "夕",
    symbol: "夕",
    position: 1,
    startData() { return {
        unlocked() { return hasUpgrade('c',31)},
		time: new Decimal(0),
    }},
    color: "#ffeeff",
    
    row: 1, 
    layerShown(){ return hasMilestone('x',0)},
     challenges: {
        11: {
            name: "Crave Wave", // 挑战显示名字
            challengeDescription: "解锁非常有意思的龙的新升级", // 挑战显示内容            
            goalDescription: "1e2024春节点",// 挑战显示目标
            canComplete: function () { return player.points.gte("1e2024") },// 挑战实际目标
            rewardDescription: "挑战中的效果适用于挑战外",// 挑战显示奖励
            unlocked() { return hasMilestone("x", 0) }// 挑战解锁条件
        },
        12: {
            name: "The Chariot～REVllVAL～",
            challengeDescription: "解锁不是那么有意思的年的时间膨胀里程碑，秒＾1.0419", // 挑战显示内容
            goalDescription: "1e1405秒",// 挑战显示目标
            canComplete: function () { return player.y.points.gte("1e1405") },// 挑战实际目标
            rewardDescription: "所有挑战的增益在挑战外生效",// 挑战显示奖励
            unlocked() { return hasChallenge("x", 11) }// 挑战解锁条件
        },
        13: {
            name: "Luminescence",
            challengeDescription: "解锁炸档维度", // 挑战显示内容
            goalDescription: "还没做完",// 挑战显示目标
            canComplete: function () { return player.y.points.gte("1ee1406") },// 挑战实际目标
            rewardDescription: "保留解锁的东西",// 挑战显示奖励
            unlocked() { return hasChallenge("x", 12) }// 挑战解锁条件
        },
    }, 

    milestones: {
   0: {
    requirementDescription: "解锁“夕”层级",
    effectDescription() {return "耗时 "+formatTime(player.f.time)},
    done() { return player.f.unlocked() },
    onComplete() {player.f.time=player.realTime},
    unlocked() {return hasUpgrade('c',31)},
   },
    },
    
})//夕
addLayer("sc", {
    name: "sc",
    symbol: "软上限",
    position: 0,
    row:99,
    startData() { return {
        unlocked() { return true},

		time:new Decimal(0)
    }},
    color: "#1f1e33",
    

    layerShown(){ return true},
   milestones: {

   0: {
    requirementDescription: "您太龙了",
    effectDescription: "龙达到ee10,超过部分将÷还没做呢",
    tooltip: "获得称号：龙(softcap)",
    done() { return player.d.points.gte("1e1e10") },
   },

  },
})//乐
