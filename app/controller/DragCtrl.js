/**
 *  Sencha controller
**/
/*global Ext */

Ext.define( 'draggable.controller.DragCtrl', {
	extend: 'Ext.app.Controller',
	
	dragCount: 1,
	recordInfo: null,
	
	config: {
		refs: {
			dragPanel1: 'dragPanel1',
			dragItem: '#dragItem',
			dragBtn: 'dragPanel1 button[action=dragBtn]',
			//someView: '#someViewId',
			dragPanel2: 'dragPanel2',
			dragPanel3: 'dragPanel3',
			dragAccount3: 'dragPanel3 #accountList3',
			dragPanel4: '#dragPanel4',
			dragAccount4: '#dragPanel4 #accountList4',
			recordInfo: '#recordInfo'
		},
		
		control: {
			dragPanel1: {
				initialize: function( self ){
					console.log( "dragPanel1 initialized" );
					
					//debugger;
					var dragItem = this.getDragItem();
					//dragItem.setDraggable( true );
					/*
					dragItem.setDraggable({
						listeners:{
							dragstart: function( self, e, startX, startY ){
								console.log( "dragStart[" + startX + ":" + startY + "]" );
							},
							drag: function( self, e, newX, newY ){
								console.log( "drag[" + newX + ":" + newY + "]" );
							},
							dragend: function( self, e, dx, dy ){
								console.log( "dragend[" + dx + ":" + dy + "]");
							}
						}
					});
					*/
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
			},
			//-- drag panel2
			dragPanel2: {
				initialize: function( self ){
					console.log( "dragpanel2 initialized" );
				}
			},
			accountList: {
				select: function(){
					console.log( "item selected in the account list" );
				}
			},
			//someView: { tap: 'doSomethingCustomLocalMethod' }
			
			//-- drag panel3
			dragPanel3: {
				initialize: function( self ){
					console.log( "dragPanel3" );
				}
			},
			dragAccount3: {
				select: function( list, record, opts ){
					console.log( "drag account list 3" );
					
					//debugger;
					
					var sel = list.element.down( "." + list.getSelectedCls() );
					if( sel ){
						console.log( "got selected element" );
						
						var d = new Ext.util.Draggable( sel );
					}
					
					Ext.defer( function(){
						debugger;
						var sel = list.element.down( "." + list.getSelectedCls() );
						var d = new Ext.util.Draggable( { element:sel,
							listeners: {
								dragstart: function( self, e, startX, startY ){
									console.log( "test dragStart[" + startX + ":" + startY + "]" );
								},
								drag: function( self, e, newX, newY ){
									console.log( "test drag[" + newX + ":" + newY + "]" );
								},
								dragend: function( self, e, dx, dy ){
									console.log( "test dragend[" + dx + ":" + dy + "]");
								}
							}
						});
					}, 500 );
				}
			},
			
			//--	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	
			
			dragPanel4: {
				initialize: function( self ){
					console.log( "dragPanel4" );
				}
			},
			dragAccount4: {
				select: function( list, record, opts ){
					console.log( "selected item in list 4" );
				},
				itemtaphold: function( list, index, dataItem, record, e, opts ){
					console.log( "itemtap hold occurring" );
				},
				itemtouchstart: function( list, index, dataItem, record, e, opts ){
					console.log( "item touchstart" );
					this.recordInfo = this.getRecordInfo();
					
					if( !this.recordInfo || !record ) return;
					
					console.log( "recordName" );
					
					this.recordInfo.element.setX( e.pageX );
					this.recordInfo.element.setY( e.pageY );
					this.recordInfo.setHtml( record.data.title );
					this.recordInfo.show();
				},
				itemtouchmove: function( list, index, dataItem, record, e, opts ){
					console.log( "touchmove" );
					
					//-- disable this to stop the list from moving while dragging
					//-- but note the scrollable list is draggable (which is how it scrolls,
					//-- so care will have to be taken on when to stop propagation or not
					//e.stopPropagation();
					
					if( !this.recordInfo ) return;
					
					this.recordInfo.element.setX( e.pageX );
					this.recordInfo.element.setY( e.pageY );
				},
				itemtouchend: function( list, index, dataItem, record, e, opts){
					console.log( "touchend" );
					
					if( !this.recordInfo ) return;
					
					this.checkDropInCalendar( e.pageX, e.pageY );
					
					this.recordInfo.element.setX( 0 );
					this.recordInfo.element.setY( 0 );
					this.recordInfo.hide();
				}
			}
		}
	},
	
	init: function(){
		console.log( 'initialized draggable.view.DragCtrl controller' );
		/*
		var divTag = document.createElement("div");
		divTag.id = "recordInfo";
		
		//Style the new div
		divTag.setAttribute("align","center");
		divTag.style.border = "1px solid rgba(0,0,0,.3)";
		divTag.style.width = "100px";
		divTag.style.height = "60px";
		divTag.style.background = "#5283D1";
		divTag.style.top = "0px";
		divTag.style.left =  "0px";
		divTag.style.position = "absolute";
		divTag.style.color = "rgba(0,0,0,.5)";
		divTag.style.borderRadius = "6px";
		divTag.style.display = "none !important";
		//divTag.className ="x-draggable";
		divTag.className = "x-item-hidden x-panel x-container";
		
		//added some text inside the div
		divTag.innerHTML = this.dragCount + " new";
		
		document.body.appendChild(divTag);
		this.recordInfo = divTag;
		*/
	},
	
	checkDropInCalendar: function( xPos, yPos ){
		var pageWidth = Ext.Viewport.element.dom.clientWidth;
		
		if( pageWidth - xPos < 342 ){
			alert( "dropped in calendar" );
		}
	},
	
	noop:function(){}
	
	//-- local methods
});
