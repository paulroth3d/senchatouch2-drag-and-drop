Ext.define( 'draggable.view.DragPanel4', {
	extend: 'Ext.Panel',
	xtype: 'dragPanel4',
	id: 'dragPanel4',
	
	config: {
		layout: 'hbox',
		fullscreen: true,
		
		items: [{
			xtype: 'list',
			id: 'accountList4',
			itemTpl: '{title}',
			width: 300,
			data: [
				{ title: 'Item 101' },
				{ title: 'Item 102' },
				{ title: 'Item 103' },
				{ title: 'Item 104' },
				{ title: 'Item 105' },
				{ title: 'Item 106' },
				{ title: 'Item 107' },
				{ title: 'Item 108' },
				{ title: 'Item 109' },
				{ title: 'Item 110' },
				{ title: 'Item 101' },
				{ title: 'Item 102' },
				{ title: 'Item 103' },
				{ title: 'Item 104' },
				{ title: 'Item 105' },
				{ title: 'Item 106' },
				{ title: 'Item 107' },
				{ title: 'Item 108' },
				{ title: 'Item 109' },
				{ title: 'Item 110' },
				{ title: 'Item 101' },
				{ title: 'Item 102' },
				{ title: 'Item 103' },
				{ title: 'Item 104' },
				{ title: 'Item 105' },
				{ title: 'Item 106' },
				{ title: 'Item 107' },
				{ title: 'Item 108' },
				{ title: 'Item 109' },
				{ title: 'Item 110' },
				{ title: 'Item 101' },
				{ title: 'Item 102' },
				{ title: 'Item 103' },
				{ title: 'Item 104' },
				{ title: 'Item 105' },
				{ title: 'Item 106' },
				{ title: 'Item 107' },
				{ title: 'Item 108' },
				{ title: 'Item 109' },
				{ title: 'Item 110' },
				{ title: 'Item 101' },
				{ title: 'Item 102' },
				{ title: 'Item 103' },
				{ title: 'Item 104' },
				{ title: 'Item 105' },
				{ title: 'Item 106' },
				{ title: 'Item 107' },
				{ title: 'Item 108' },
				{ title: 'Item 109' },
				{ title: 'Item 110' },
				{ title: 'Item 101' },
				{ title: 'Item 102' },
				{ title: 'Item 103' },
				{ title: 'Item 104' },
				{ title: 'Item 105' },
				{ title: 'Item 106' },
				{ title: 'Item 107' },
				{ title: 'Item 108' },
				{ title: 'Item 109' },
				{ title: 'Item 110' }
			]
		},{
			xtype:'spacer',
			flex: 1
		},{
			xtype: 'panel',
			style: 'background-color: #FF0000; border: 1px solid #000;',
			html: '&nbsp;',
			width: 342
		
		
		}]
	}
});
