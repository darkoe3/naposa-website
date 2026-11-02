const imageDirectory = "/images/events/65th-anniversary/";

export const anniversaryPhotos = [
  {
    filename: "anniversary-guests-at-launch.jpg",
    width: 1638,
    height: 960,
    caption: "Guests and members of the school community mark the launch of the 65th Anniversary celebration.",
    alt: "Guests holding the Nsaba Presbyterian Senior High School 65th Anniversary banner during the launch",
  },
  {
    filename: "NAPOSA 65th Anniversary Address-3.png",
    caption: "An address delivered during the anniversary launch programme.",
    alt: "A speaker addressing guests at the Nsaba Presbyterian Senior High School anniversary launch",
  },
  {
    filename: "65th anniversary bath-house plaque unveiling-1.png",
    caption: "The commemorative plaque is unveiled at the open bath house.",
    alt: "Guests unveiling the commemorative plaque on the open bath house",
  },
  {
    filename: "NAPOSA 65th Anniversary Group Portrait-2.png",
    caption: "School representatives, old students and guests gather at the completed bath-house facility.",
    alt: "School representatives, old students and guests standing in front of the completed bath house",
  },
  {
    filename: "65th-launch-address-enhanced.png",
    caption: "Members of the school community participate in the launch programme.",
    alt: "Participants gathered around the lectern during the 65th Anniversary launch",
  },
  {
    filename: "65th-launch-bath-house-group-enhanced.png",
    caption: "A group photograph taken at the entrance to the bath-house facility.",
    alt: "Guests and old students gathered at the entrance to the open bath house",
  },
].map((photo) => ({
  width: 1448,
  height: 1086,
  ...photo,
  src: `${imageDirectory}${encodeURIComponent(photo.filename)}`,
}));
