import React, { Children } from "react"

const InviteProvider = () => {
  cosnt[(invites, setInvites)] = useState([])

  const getInvites = () => {
    return fetch("http://localhost:4000/invites").then((res) => json(res).then(setInvites))
  }

useEffect(()=> {
  
  const parsedInvites = (arr) => {
    let invitees = []
      arr.forEach((in) => {
          arr.push(in.name)
          if(in.guests !== 0){
             parsedIvites(in.guests)
          }
      }) 

}



  return (
   
          <>
            {invitees.map((invite) => (
              <div>{invite}</div>
            ))}
         </>
        )
      }




  arr = [
    {
      name: "Leon",
      guests: [
        {
          name: "Bill",
          guests: [],
        },
        {
          name: "Greg",
          guests: [
            {
              name: "Vincent",
              guests: [],
            },
          ],
        },
      ],
    },
    {
      name: "Caroline",
      guests: [],
    },
    {
      name: "Sal",
      guests: [
        {
          name: "Sarah",
          guests: [],
        },
      ],
    },
  ]



parsedInvites(invites)





arr.map(i => {
    invitees.push(i.name)
    if(i.guests !== 0) {