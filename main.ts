namespace SpriteKind {
    export const sword = SpriteKind.create()
    export const blockyboi = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(lemur_man_hehehehohohohahaha, tiles.getTileLocation(4, 14))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swordnhand == 1) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkBack0`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkBack`,
        100,
        true
        )
    }
})
function tilemap2 () {
    tiles.setCurrentTilemap(tilemap`test`)
    scene.cameraFollowSprite(lemur_man_hehehehohohohahaha)
    tiles.placeOnTile(lemur_man_hehehehohohohahaha, tiles.getTileLocation(16, 16))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swordnhand == 1) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkLeft0`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkLeft`,
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`test`)
    tiles.placeOnTile(lemur_man_hehehehohohohahaha, tiles.getTileLocation(11, 17))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swordnhand == 1) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkRight0`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkRight`,
        100,
        true
        )
    }
})
function _function () {
    player1()
    move()
    tilemap2()
    variable_setup()
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
    if (swordnhand == 1) {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkFront0`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        lemur_man_hehehehohohohahaha,
        assets.animation`heroWalkFront`,
        100,
        true
        )
    }
})
function variable_setup () {
    swordnhand = 0
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    blocky_boi = sprites.create(img`
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
        `, SpriteKind.blockyboi)
    animation.runImageAnimation(
    blocky_boi,
    assets.animation`myAnim`,
    200,
    true
    )
    tiles.placeOnTile(blocky_boi, tiles.getTileLocation(4, 11))
    swordnhand += 1
})
function move () {
    controller.moveSprite(lemur_man_hehehehohohohahaha, 100, 100)
}
let blocky_boi: Sprite = null
let swordnhand = 0
let lemur_man_hehehehohohohahaha: Sprite = null
_function()
