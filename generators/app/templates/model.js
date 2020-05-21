/* <%= pkg %> <%= version %> */
import { Sequelize, DataTypes, Model } from 'sequelize'

export default sequelize => {
  class <%= schema %> extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
  
  } 
  
  <%= schema %>.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
      allowNull:false,
    },
    a: {
      type: DataTypes.STRING,
      //type: DataTypes.BOOLEAN,
      //type: DataTypes.INTEGER,
      //type: DataTypes.BIGINT,
      //type: DataTypes.DATE,
      allowNull: false,
      defaultValue:'john',
      //unique:true
      //field:'column_name_here'
    },

    b: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
      //field:'column_name_here'
    },
  
    /*
    uuid:{
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    */
  },{
    sequelize,
    modelName:'<%= schema %>',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
    //tableName: '<%= lower_plural %>'
    //freezeTableName: true
  })

  
  <%= schema %>.associate = models => {
    <%= schema %>.belongsTo(models.User) //this will give a foreign key to user here, and make it available from here
    //models.User.hasMany(<% schema %>) //this will give this model a UserId field and make it available from user
  }

  return <%= schema %>

  //<%= schema %>.addHook('afterCreate', 'hookName', (e, options) => {})
}


