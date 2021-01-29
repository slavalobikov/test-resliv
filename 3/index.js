
fetch('https://media-exp1.licdn.com/dms/image/C4E03AQFzrlMNCfzaEQ/profile-displayphoto-shrink_100_100/0/1601381694783?e=1617235200&v=beta&t=hXN48L-VzCa6ai17s3j_HCJBWEP7fCMDpv1CAOZc2gc').then().then(
    fetch('https://media-exp1.licdn.com/dms/image/C5603AQFI-yWz7bHonQ/profile-displayphoto-shrink_100_100/0/1589445414297?e=1617235200&v=beta&t=VlBt6W0C-RwdO7LCWhr3Ri_HRHvAlRctfn6-LMDhd_8').then(res => {
        console.log('оба запроса выполнены')

    })
)
