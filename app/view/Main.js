Ext.define("draggable.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'dragContainer',
    
    config: {
    	tabBarPosition: 'bottom',
        
        items: [{
			title: 'drag1',
			iconCls: 'home',
			xtype: 'dragPanel1'
		}]
    }
});