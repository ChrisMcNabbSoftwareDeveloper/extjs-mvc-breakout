Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
    name: 'HelloExt',
    launch: function() {
	console.log("something")
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello Ext',
                    html : 'Hello! Welcome to Ext JS.'
                }
            ]
        });
    }
});