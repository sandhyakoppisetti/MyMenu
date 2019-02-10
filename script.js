document.getElementById('issueInputForm').addEventListener('submit',saveItem);
function saveItem(e){
  var itemId = chance.guid();
  var itemName =document.getElementById('nameDescInput').value;
  var itemPrice=document.getElementById('itemPriceInput').value;
  var itemStatus='Open';

  var item = {
    id: itemId,
    name: itemName,
    price: itemPrice,
    status: itemStatus
  }
  if(localStorage.getItem('items')=== null){
    var items =[];
    items.push(item);
    localStorage.setItem('items',JSON.stringify(items));

  }else{
    var items=JSON.parse(localStorage.getItem('items'));
    items.push(item);
    localStorage.setItem('items',JSON.stringify(items));
  }
  document.getElementById('issueInputFrorm').reset();
  fetchItems();
  e.preventDefault();
}
function fetchItems()
{
 var items =JSON.parse(localStorage.getItem('items'));
 var itemsList = document.getElementById('itemsList');
 itemsList.innerHTML ='';
  for(var i=0; i<items.length; i++)
    {
      var id = items[i].id;
      var name = items[i].name;
      var price= items[i].price;
      var status= items[i].status;

      itemsList.innerHTML +='<div class="well">'+
                             '<h6>Item ID: '+ id + '</h6>'+
                             '<p><span class="label label-info">' + status                               + '</span></p>'+
                              '<h3>' + name +'</h3>'+
                               '<p><span class="glyphicon glyphicon-time"></span>'+ price +'</p>'+
                               '<a href="#" " class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">close</a>'+
                                 '<a href="#"  class="btn btn-danger" onclick="deleteItem(\''+ id+'\')"> delete </a>'+
      '</div>';



    }
}
function setStatusClosed (id){
  var items =JSON.parse(localStorage.getItem('items'));
  for(var i=0;i<items.length;i++){
    if(items[i].id == id){
      items[i].status="closed";

    }
  }
  localStorage.setItem('items',JSON.stringify(items));
  fetchItems();
}
function deleteItem(id){
  var items=JSON.parse(localStorage.getItem('items'));
  for(var i=0;i<items.length;i++){
    if(items[i].id==id){
      item.splice(i,1);
    }
  }
  localStorage.setItem('issues',JSON.stringify(items));
  fetchItems();
}
