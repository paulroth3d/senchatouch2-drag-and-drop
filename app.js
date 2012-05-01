//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'draggable',

    requires: [
        'Ext.MessageBox'
    ],
    
    controllers: ['DragCtrl'],

    views: ['Main', 'DragPanel1', 'DragPanel2', 'DragPanel3', 'DragPanel4'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        Ext.Viewport.add(Ext.create('draggable.view.Main'));
        
        Ext.Viewport.add( Ext.create( "Ext.Panel", {
			width: 100,
			height: 100,
			floating: true,
			style: 'background-color: #00FF00; border: 1px solid #000;',
			html: '&nbsp;',
			id: 'recordInfo'
        }));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
