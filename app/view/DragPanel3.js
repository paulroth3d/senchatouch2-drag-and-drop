Ext.define( 'draggable.view.DragPanel3', {
	extend: 'Ext.Panel',
	xtype: 'dragPanel3',
	
	config: {
		layout: 'hbox',
		fullscreen: true,
		
		items: [{
			xtype: 'list',
			id: 'accountList3',
			itemTpl: '{title}',
			width: 300,
			data: [
				{ title: 'Item 11' },
				{ title: 'Item 12' },
				{ title: 'Item 13' },
				{ title: 'Item 14' },
				{ title: 'Item 15' },
				{ title: 'Item 16' },
				{ title: 'Item 17' },
				{ title: 'Item 18' },
				{ title: 'Item 19' },
				{ title: 'Item 110' }
			]
			/*
			draggable: {
				direction: 'horizontal',
				listeners:{
					dragstart: function( self, e, startX, startY ){
						console.log( "dragStart[" + startX + ":" + startY + "]" );
					},
					drag: function( self, e, newX, newY ){
						console.log( "drag[" + newX + ":" + newY + "]" );
					},
					dragend: function( self, e, newX, newY ){
						console.log( "dragend[" + newX + ":" + newY + "]");
					}
				}
			}
			*/
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
