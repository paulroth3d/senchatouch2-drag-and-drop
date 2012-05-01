Ext.define( 'draggable.view.DragPanel2', {
	extend: 'Ext.Panel',
	xtype: 'dragPanel2',
	
	config: {
		layout: 'hbox',
		fullscreen: true,
		
		items: [{
			xtype: 'list',
			id: 'accountList2',
			itemTpl: '{title}',
			width: 300,
			data: [
				{ title: 'Item 1' },
				{ title: 'Item 2' },
				{ title: 'Item 3' },
				{ title: 'Item 4' },
				{ title: 'Item 5' },
				{ title: 'Item 6' },
				{ title: 'Item 7' },
				{ title: 'Item 8' },
				{ title: 'Item 9' },
				{ title: 'Item 10' }
			]
			//draggable: {
			//	direction: 'horizontal',
			//	listeners:{
			//		dragstart: function( self, e, startX, startY ){
			//			console.log( "dragStart[" + startX + ":" + startY + "]" );
			//		},
			//		drag: function( self, e, newX, newY ){
			//			console.log( "drag[" + newX + ":" + newY + "]" );
			//		},
			//		dragend: function( self, e, newX, newY ){
			//			console.log( "dragend[" + newX + ":" + newY + "]");
			//		}
			//	}
			//}
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
