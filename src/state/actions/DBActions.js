import * as jsonData from '../db/db.json'

const executeLoadDB = data => {
  return {
    type: 'LOAD_DB',
    payload: { category: 'general_info', displayName: 'General Info', count: data.length, data: data }
  }
}

export const loadDB = () => {
  return dispatch => {
    let promise = new Promise((resolve, reject) => {
      let data = jsonData.map((item, i) => {
        if (item.data_type === 'list') {
          return {
            index: i,
            type: item.containing_object.data_type,
            everTrueFieldName: item.containing_object.name,
            displayName: getDisplayName(item.containing_object.name, item.containing_object.data_type),
            usage: item.containing_object.app_keys
          }
        } else {
          return {
            index: i,
            type: item.data_type,
            everTrueFieldName: item.name,
            displayName: getDisplayName(item.name, item.data_type),
            usage: item.app_keys
          }
        }
      })
      resolve(data)
    })
    promise.then(data => dispatch(executeLoadDB(data))).catch(err => console.error(err))
  }
}

export const getDisplayName = (str, type = '') => {
  if (str.indexOf('dt_') > -1) {
    return str.replace('dt_', 'Date ')
  } else if(type.toLowerCase() === 'boolean') {
    return `Is ${str}?` 
  } else {
    if (str.indexOf('_') < 0) {
      return str.charAt(0).toUpperCase() + str.substring(1)
    } else {
      str = str.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      if (str.indexOf('Name') > -1) {
        return str.substring(str.indexOf('Name') + 5) + ' Name'
      } else {
        return str
      }
    }
  }
}
