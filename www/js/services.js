angular.module('starter.services', [])

.factory('Items', function($firebaseObject) {
  var itemsRef = new Firebase("https://schedulae.firebaseio.com/items");
  return $firebaseObject(itemsRef);
 
});
