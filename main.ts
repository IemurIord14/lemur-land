controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lemur_man_hehehehohohohahaha,
    assets.animation`heroWalkBack`,
    100,
    true
    )
})
function tilemap2 () {
    tiles.setCurrentTilemap(tilemap`test`)
    scene.cameraFollowSprite(lemur_man_hehehehohohohahaha)
    tiles.placeOnTile(lemur_man_hehehehohohohahaha, tiles.getTileLocation(32, 32))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lemur_man_hehehehohohohahaha,
    assets.animation`heroWalkLeft`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lemur_man_hehehehohohohahaha,
    assets.animation`heroWalkRight`,
    100,
    true
    )
})
function _function () {
    player1()
    move()
    tilemap2()
}
function player1 () {
    lemur_man_hehehehohohohahaha = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    lemur_man_hehehehohohohahaha,
    assets.animation`heroWalkFront`,
    100,
    true
    )
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    lemur_man_hehehehohohohahaha,
    assets.animation`heroWalkFront`,
    100,
    true
    )
})
function move () {
    controller.moveSprite(lemur_man_hehehehohohohahaha, 100, 100)
}
let lemur_man_hehehehohohohahaha: Sprite = null
_function()
