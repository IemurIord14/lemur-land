function tilemap2 () {
    tiles.setCurrentTilemap(tilemap`test`)
    scene.cameraFollowSprite(lemur_man_hehehehohohohahaha)
    tiles.placeOnTile(lemur_man_hehehehohohohahaha, tiles.getTileLocation(32, 32))
}
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
function move () {
    controller.moveSprite(lemur_man_hehehehohohohahaha, 100, 100)
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkFront`,
        100,
        false
        )
    }
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkBack`,
        100,
        false
        )
    }
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkLeft`,
        100,
        false
        )
    }
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkRight`,
        100,
        false
        )
    }
}
let lemur_man_hehehehohohohahaha: Sprite = null
_function()
