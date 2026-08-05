
const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')

// Follow Controller
async function followUserController(req,res) {
    let followerUsername = req.user.username;
    let followingUsername=  req.params.username;


if(followerUsername === followingUsername){
    return res.status(400).json({
       message: 'You cannot follow yourself'
    })
}


const isUserAlreadyExist = await userModel.findOne({
    username: followingUsername
})

if(!isUserAlreadyExist){
    return res.status(200).json({
       message: 'User you are trying to follow does not exist'
    })
}

const isAlreadyFollwing = await  followModel.findOne({
    follower: followerUsername,
    following: followingUsername
})

if(isAlreadyFollwing){
    return res.status(200).json({
        message: `you are already following  ${followingUsername}`
    })
}

    let followRecord = await followModel.create({
        follower: followerUsername,
        following: followingUsername
    })




    res.status(201).json({
        message: `you are now following ${followingUsername}`,
        follow: followRecord
    })
    
}


//  unFollow Controller
async function unfollowUserController(req,res){
      let followerUsername = req.user.username
      let followingUsername = req.params.username


      let isUserFollowing = await followModel.findOne({
            follower: followerUsername,
            following: followingUsername
      })

      if(!isUserFollowing){
        return res.status(404).json({
            message: `You are not following ${followingUsername}`
        })
      }


      await followModel.findByIdAndDelete(isUserFollowing._id)
      res.status(200).json({
        message: `you have unfollow ${followingUsername}`,
        unfollow: isUserFollowing
      })
}

// Following List Controller
async function getFollowingListController(req,res){
    let currentUser = req.user.username


    let followingRecord = await followModel.find({
        follower: currentUser
    })

    let usernames = await followingRecord.map(
        item => item.following
    )

    let user = await userModel.find({
        username: { $in: usernames}
    })

    res.status(200).json({
        message: 'find following list',
        user
    })
    
}

// Follower List Controller
async function getFollowerListController(req,res) {
    let currentUser = req.user.username

    let followerRecord = await followModel.find({
        following: currentUser
    })

    let usernames = await followerRecord.map(
        item => item.follower
    )

    let user = await userModel.find({
        username: { $in: usernames}
    })

    res.status(200).json({
        message: "find follower list",
        user
    })


}

module.exports = {
    followUserController,
    unfollowUserController,
    getFollowingListController,
    getFollowerListController,
}