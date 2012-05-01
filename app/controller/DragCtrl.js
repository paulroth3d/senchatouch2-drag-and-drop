/**
 *  Sencha controller
**/
/*global Ext */

Ext.define( 'draggable.controller.DragCtrl', {
	extend: 'Ext.app.Controller',
	
	dragCount: 1,
	
	config: {
		refs: {
			dragPanel1: 'dragPanel1',
			dragItem: '#dragItem',
			dragBtn: 'dragPanel1 button[action=dragBtn]'
			//someView: '#someViewId'
		},
		
		control: {
			dragPanel1: {
				initialize: function( self ){
					console.log( "dragPanel1 initialized" );
					
					debugger;
					var dragItem = this.getDragItem();
					//dragItem.setDraggable( true );
					dragItem.setDraggable({
						listeners:{
							dragstart: function( a,b,c,d,e,f,g,h,i ){
								console.log( "dragStart" );
							},
							drag: function(a,b,c,d,e,f,g,h,i ){
								console.log( "drag" );
							},
							dragend: function( a,b,c,d,e,f,g,h,i){
								console.log( "dragend");
							}
						}
					});
				}
			},
			dragItem: {
				tap: function( self ){
					console.log( "you have clicked:" + self );
				}
			},
			dragBtn: {
				tap: function( self ){
					console.log( "you have clicked the draggable button" );
					
					//debugger;
					//var dragItem = this.getDragItem();
					//dragItem.setDraggable(true);
					
					/*
					var divTag = document.createElement("div");
					divTag.id = "somename" + this.dragCount;
					
					//Style the new div
					divTag.setAttribute("align","center");
					divTag.style.border = "1px solid rgba(0,0,0,.3)";
					divTag.style.width = "100px";
					divTag.style.height = "60px";
					divTag.style.background = "#5283D1";
					divTag.style.top = "170px";
					divTag.style.left =  "5px";
					divTag.style.position = "absolute";
					divTag.style.color = "rgba(0,0,0,.5)";
					divTag.style.borderRadius = "6px";
					
					divTag.className ="x-draggable";
					
					//added some text inside the div
					divTag.innerHTML = this.dragCount + " new";
					
					document.body.appendChild(divTag);
					
					new Ext.util.Draggable( divTag.id, { 
					});
					
					this.dragCount += 1;
					*/
				}
			}
			//someView: { tap: 'doSomethingCustomLocalMethod' }
		}
	},
	
	init: function(){
		console.log( 'initialized draggable.view.DragCtrl controller' );
	}
	
	//-- local methods
});
