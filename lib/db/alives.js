var _0x3f1f03=_0x1913;function _0x1913(_0x1a3c53,_0x52c330){var _0x4b16fb=_0x4b16();return _0x1913=function(_0x1913e7,_0x2cd264){_0x1913e7=_0x1913e7-0x1d9;var _0x4cc5c4=_0x4b16fb[_0x1913e7];return _0x4cc5c4;},_0x1913(_0x1a3c53,_0x52c330);}(function(_0xe10d5d,_0x3e78e0){var _0x294e85=_0x1913,_0x328bac=_0xe10d5d();while(!![]){try{var _0x265898=parseInt(_0x294e85(0x1dc))/0x1+-parseInt(_0x294e85(0x1e6))/0x2*(parseInt(_0x294e85(0x1e7))/0x3)+-parseInt(_0x294e85(0x1ed))/0x4+-parseInt(_0x294e85(0x1e5))/0x5*(parseInt(_0x294e85(0x1ea))/0x6)+parseInt(_0x294e85(0x1dd))/0x7*(-parseInt(_0x294e85(0x1e1))/0x8)+parseInt(_0x294e85(0x1e3))/0x9*(-parseInt(_0x294e85(0x1f2))/0xa)+parseInt(_0x294e85(0x1da))/0xb;if(_0x265898===_0x3e78e0)break;else _0x328bac['push'](_0x328bac['shift']());}catch(_0x13fedc){_0x328bac['push'](_0x328bac['shift']());}}}(_0x4b16,0x35bf7));const config=require(_0x3f1f03(0x1db)),{DataTypes}=require(_0x3f1f03(0x1f0)),AliveDB=config['DATABASE'][_0x3f1f03(0x1e0)](_0x3f1f03(0x1f1),{'chat':{'type':DataTypes[_0x3f1f03(0x1e9)],'allowNull':![]},'type':{'type':DataTypes[_0x3f1f03(0x1eb)],'allowNull':![]},'message':{'type':DataTypes[_0x3f1f03(0x1eb)],'allowNull':![]},'status':{'type':DataTypes[_0x3f1f03(0x1e2)],'allowNull':![]}});async function getAlive(_0x10c188=null,_0x1565cf=null){var _0x29b6e9=_0x3f1f03,_0x4421bd=await AliveDB[_0x29b6e9(0x1e4)]({'where':{'chat':_0x10c188,'type':_0x1565cf}});return _0x4421bd['length']<0x1?![]:_0x4421bd[0x0]['dataValues'];}function _0x4b16(){var _0xd309af=['48MBVcic','status','STRING','133626biFYmq','TEXT','dataValues','1173964HKHcBg','exports','destroy','sequelize','Alive','1238180OBwvnx','update','8849401waRJQf','../../config','330054Bbolfm','940429fpXDPz','create','length','define','8XDPdOW','BOOLEAN','9HJEeVo','findAll','70uvqtbZ','6368JQAsZh'];_0x4b16=function(){return _0xd309af;};return _0x4b16();}async function setAlive(_0x466df0=null,_0x512ee8=null,_0x1f8b1c=null){var _0x12a81e=_0x3f1f03,_0x204f33=await AliveDB['findAll']({'where':{'chat':_0x466df0,'type':_0x512ee8}});return _0x204f33[_0x12a81e(0x1df)]<0x1?await AliveDB[_0x12a81e(0x1de)]({'chat':_0x466df0,'message':_0x1f8b1c,'type':_0x512ee8,'status':!![]}):await _0x204f33[0x0][_0x12a81e(0x1d9)]({'chat':_0x466df0,'message':_0x1f8b1c});}async function AliveStatus(_0x4ca76d=null,_0x7b7131=null){var _0x1e99a9=_0x3f1f03,_0x3f4f60=await AliveDB[_0x1e99a9(0x1e4)]({'where':{'chat':_0x4ca76d,'type':_0x7b7131}});if(_0x3f4f60[_0x1e99a9(0x1df)]<0x1)return![];return _0x3f4f60[0x0][_0x1e99a9(0x1ec)]['status']?await _0x3f4f60[0x0]['update']({'chat':_0x4ca76d,'status':![]}):await _0x3f4f60[0x0][_0x1e99a9(0x1d9)]({'chat':_0x4ca76d,'status':!![]});}async function delAlive(_0x305d6c=null,_0x3c1bb6=null){var _0x4f48a9=_0x3f1f03,_0x38c3f6=await AliveDB[_0x4f48a9(0x1e4)]({'where':{'chat':_0x305d6c,'type':_0x3c1bb6}});return await _0x38c3f6[0x0][_0x4f48a9(0x1ef)]();}async function AliveGet(_0x2505b0=null,_0x1934e9=null){return new Promise(async(_0x37d695,_0x1402d5)=>{var _0x1315c5=_0x1913;try{var _0x158dca=await AliveDB[_0x1315c5(0x1e4)]({'where':{'chat':_0x2505b0,'type':_0x1934e9}});_0x158dca[_0x1315c5(0x1df)]<0x1?_0x37d695(![]):_0x37d695(_0x158dca[0x0][_0x1315c5(0x1ec)][_0x1315c5(0x1e8)]);}catch{_0x37d695(![]);}});}module[_0x3f1f03(0x1ee)]={'AliveDB':AliveDB,'setAlive':setAlive,'getAlive':getAlive,'delAlive':delAlive,'AliveStatus':AliveStatus,'AliveGet':AliveGet};