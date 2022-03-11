

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

