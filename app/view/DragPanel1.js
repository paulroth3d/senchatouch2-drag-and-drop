Ext.define( 'draggable.view.DragPanel1', {
	extend: 'Ext.Panel',
	xtype: 'dragPanel1',
	
	config: {
		fullscreen: true,
		
		items: [{
			width: 340,
			height: 210,
			html: 'dragMe',
			id: 'dragItem',
			padding: 10,
			style: 'border: 1px solid #000;'
		//},{
		//	xtype: 'button',
		//	text: 'click Me',
		//	action: 'dragBtn'
		}]
	}
});
