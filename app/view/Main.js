Ext.define("draggable.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'dragContainer',
    
    config: {
    	tabBarPosition: 'bottom',
        
        items: [{
			title: 'drag1',
			iconCls: 'home',
			xtype: 'dragPanel1'
		},{
			title: 'drag2',
			iconCls: 'home',
			xtype: 'dragPanel2'
		},{
			title: 'drag3',
			iconCls: 'home',
			xtype: 'dragPanel3'
		},{
			title: 'drag4',
			iconCls: 'home',
			xtype: 'dragPanel4'
		/*
		},{
			xtype: 'panel',
			width: 100,
			height: 100,
			floating: true,
			//modal: true,
			style: 'background-color: #00FF00; border: 1px solid #000;',
			html: '&nbsp;',
			//hidden: true,
			id: 'recordInfo',
			listeners:{
				'afterrender': function(panel){
					panel.setPosition(100,300);
				}
			}
		*/
		}]
    }
});