function tilemap2 () {
    tiles.setCurrentTilemap(tilemap`test`)
}
function _function () {
    tilemap2()
    player1()
    move()
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
}
let lemur_man_hehehehohohohahaha: Sprite = null
_function()
scene.cameraFollowSprite(lemur_man_hehehehohohohahaha)
