

const commonValues ={
    hidden : {opacity : 0},
    show : {opacity : 1}
}


export const listContainerVariant = {
    hidden: commonValues.hidden,
    show: {...commonValues.show , ...{
        transition: {
          staggerChildren: 0.5
        }
      }}
  }


export  const listItemVariant = {
    hidden: commonValues.hidden,
    show: commonValues.show
  }

export const dropInVariant = {
  hidden:{
    y:"-100vh",
    opacity:0
  },
  visible : {
    y:"0",
    opacity:1,
    transition:{
      duration : 0.1,
      type:"spring",
      damping:25,
      stiffness:500
    }
  },
  exit:{
    y:'100vh',
    opacity:0
  }
}

