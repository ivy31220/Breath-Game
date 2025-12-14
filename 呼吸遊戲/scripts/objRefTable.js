const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.Sin,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Spritefont2,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.SetY
	];
};
self.C3_JsPropNameTable = [
	{平臺: 0},
	{邊界約束: 0},
	{正弦運動: 0},
	{鏡頭跟隨: 0},
	{太空人: 0},
	{鍵盤: 0},
	{平鋪圖: 0},
	{飯糰: 0},
	{滑鼠: 0},
	{CountdownText: 0},
	{位圖字體: 0},
	{StartButton_Sprite: 0},
	{spacejunk: 0},
	{GameState: 0},
	{Timer: 0}
];

self.InstanceType = {
	太空人: class extends self.ISpriteInstance {},
	鍵盤: class extends self.IInstance {},
	平鋪圖: class extends self.ITiledBackgroundInstance {},
	飯糰: class extends self.ISpriteInstance {},
	滑鼠: class extends self.IInstance {},
	CountdownText: class extends self.ITextInstance {},
	位圖字體: class extends self.ISpriteFontInstance {},
	StartButton_Sprite: class extends self.ISpriteInstance {},
	spacejunk: class extends self.ISpriteInstance {}
}