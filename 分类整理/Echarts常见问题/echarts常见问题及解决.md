## 1. 如何修改网格线的颜色  
   
        yAxis: {
            // ...
            splitLine: {
            // show: true, 
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: 'rgba(0,0,0,0.12)',
            },                            
            },
        },  

## 2. 如何显示两条y轴，如史诗燃耗图   
如下，两个坐标轴，一个在左一个在右：  

        yAxis: [
            {
            type: 'value',
            position: 'left',//左
            inverse: true,
            axisTick: { show: false },
            axisLine: {
                show: true,
                lineStyle: {
                color: '#eee',
                type: 'solid',
                width: 1,
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                color: 'rgba(0,0,0,0.65)',
                },
                formatter(value, index) {
                return !value ? value : '';
                },
            },
            splitLine: {
                lineStyle: {
                color: '#eee',
                },
            },
            },
            {
            type: 'value',
            position: 'right',// 右
            // ...
            },
        ],

## 3. 当legend设置为vertical时，与图重叠，如何分开？  
   对于直角坐标系，可以调整grid的right、图表的宽度、legend的right；  
   对于饼图等，可以调整center、radius、 表的宽度等；  

   如：  
    
        legend: {
            orient: 'vertical', //竖
            data: ['待处理', '处理中', '已完成'],
            itemWidth: 14,
            itemHeight: 14,
            itemGap: 48,
            icon: 'rect',
            right: 0, // 重要
            top: 25, // 重要
        },
        grid: {
            left: '5px',
            top: '26px',
            right: '28%', // 重要
            bottom: 30,
            containLabel: true,
        },

## 4. 当x轴文字过多时的处理方式  
   
   1. 旋转  
   2. 类目隔一个加换行  
   3. 加滚动条  
   4. 设置interval，隔几个显示一个
   5. 自定义label的样式，根据数组的大小确定应该截断的长度 

类目全部显示，根据数据长度判断是否旋转： 

    grid: { //旋转后可能会显示不全，通过调整grid，使文字显示完整
        x: 40,
        y2: 10,
        top: '30',
        left: '40',
        right: '50',
        containLabel: true,
      },

    xAxis: [
        {
          // ...
          axisLabel: {
            interval: 0, //全部显示
            rotate: chartDataOrigin.length >= 8 ? 20 : 0,//根据数据条数判断是否旋转
            show: true,
            showMinLabel: true,
            showMaxLabel: true,
            // margin: 0,
            agile: 'left',
            textStyle: {
              color: 'rgba(0,0,0,0.65)',
            },
          },
        },

类目全部显示，隔一个换行：  

        const xAxisData = chartDataOrigin.length >= 10 ? chartDataOrigin.map((item, index) => {
            if (index % 2 === 1) {
                return `\n\n${item.name}`;
            }
            return item.name;
            }) : chartDataOrigin.map(item => item.name);

          xAxis: [
            {
            // ... 
            data: xAxisData,
            // ... 
            },
         ],

自定义label的样式：   

        axisLabel: {
                interval: 0,
                show: true,
                showMinLabel: true,
                agile: 'right',
                textStyle: {
                color: 'rgba(0,0,0,0.65)',
                },
                formatter(value, index) {
                if (chartDataOrigin.length >= 7) {
                    return value.length > 5 ? `${value.slice(0, 5)}...` : value;
                }
                if (chartDataOrigin.length >= 10) {
                    return value.length > 3 ? `${value.slice(0, 3)}...` : value;
                }
                return value.length > 7 ? `${value.slice(0, 7)}...` : value;
                }
            }

参考：   
（1）[旋转、隔一个换行](https://blog.csdn.net/kebi007/article/details/68488694/)

（2）[加滚动条](https://blog.csdn.net/Zheng_xiao_xin/article/details/80882113)  

## 5. 如何自定义legend图标  

        import lineLegend from './Line.svg';

        // ... 

        legend: {
            itemHeight: 2,//可以用来定义图表的高度
            data: [{
            name: '期望值',
            icon: `image://${lineLegend}`,
            }, {
            name: '剩余值',
            icon: 'line',
            }],
        },   

## 如何修改图标类似padding的内边距  
对于饼图等，通过调整center、width、heigth、radius来调整其圆心和大小，  
对于直角坐标系，通过调整grid的top、right、bottom、left来调整   
此外，通过echarts容器的margin也可以调整图表和其他内容的相对位置    

## 如何自定义ToolTip的样式  
ToolTip的formatter竟然可以写入标签并定义样式: 

            toolTip:{
            formatter(params) {
            params[0].name = _.trim(params[0].name, '\n\n');
            const sprint = chartDataOrigin.filter(item => item.name === params[0].name)[0];
            let res = `<span style="color: #3F51B5">${params[0].name}</span>`;
            res += `<span style="display:block; margin-top: 0px; margin-bottom: 2px; color: rgba(0,0,0,0.54); font-size: 11px;">${sprint.startDate && sprint.startDate.split(' ')[0].split('-').join('/')}-${sprint.endDate && sprint.endDate.split(' ')[0].split('-').join('/')}</span>`;
            res += `本迭代开始时故事点数：${sprint.start}`;
            res += `<br/>工作已完成: ${(params[1].value === '-' ? 0 : params[1].value) + (params[4].value === '-' ? 0 : params[4].value)}`;
            res += `<br/>工作增加: ${sprint.add}`;
            res += `<br/>本迭代结束时剩余故事点数: ${(params[2].value === '-' ? 0 : params[2].value) + (params[3].value === '-' ? 0 : params[3].value)}`;
            return res;
            },
        }
