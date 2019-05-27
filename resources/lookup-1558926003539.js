(function(window, undefined) {
  var dictionary = {
    "ab79e1fe-30ab-43e4-813a-c7af9f690655": "Home (admin)",
    "6d82d859-9180-4f8f-975b-0a175d7d0999": "Manage Users",
    "6ff01842-1500-4694-b0ea-f124f58e8d70": "About",
    "c9967634-9986-4742-a039-fa13bef1709f": "Privacy Policy",
    "2bee51d5-f586-48a5-bc91-9790c6c6e805": "News",
    "57061034-72fb-456a-b625-67bc862c23fe": "Search",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home (user)",
    "480ec859-a1f8-42c6-9d34-5bf2697a8dc1": "My Posts",
    "4c27b6dd-5acf-4d58-bf79-091cb8dcc511": "Sign Out",
    "234e14e0-1cd4-4492-b11c-4d5d4c1b04bf": "Write a Post",
    "c4d54e30-72e9-4aa9-9c83-1904e3a7e9f0": "Site Settings",
    "047b4846-ec30-437d-92cd-216f6d21a889": "Author Profile",
    "01620a8c-d338-41e6-867b-e2b8d73cfbe9": "Post",
    "357ca067-1c1e-423b-bd65-e311d806a136": "Contact",
    "c0f05184-5f12-4ca0-92dc-d790b9642131": "Notifications",
    "e1d90908-31ad-4724-a8c2-560296c2e067": "Term of Use",
    "ab9f825e-5630-4eab-a818-39f9461e5616": "Home",
    "3e7e3def-6a91-43bf-9f7c-39590e384402": "My Profile",
    "37e08d53-4724-4149-b359-54287ab60f09": "Manage Posts",
    "c5d94d9c-25f5-45c3-ac74-283b09554e2c": "Edit post",
    "976d3a66-6c15-401e-8808-b1429336d5ed": "Manage Tags",
    "922ec842-a117-412e-8dee-aa900c7885ea": "Sign In",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "446cf722-be49-4c7a-8e70-24f762f6def0": "Post confirm",
    "59608aec-7eab-47b0-83ac-26668811245f": "admin menu old",
    "f7dd4a95-384e-4931-8ef3-c637b532ccc3": "admin menu",
    "2c6ac673-4d86-4f51-8bf3-aa9d705a06a8": "footer",
    "9bd9ce54-ccab-40fe-b7f1-400178b7da67": "user menu",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);