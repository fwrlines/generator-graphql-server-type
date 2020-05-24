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
      type: DataTypes.UUIDV4,
      defaultValue:Sequelize.UUIDV4,
      //type: DataTypes.INTEGER,
      //autoIncrement: true,
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
    //tableName: '<%= local_package_name%>_<%= lower_plural %>'
    //freezeTableName: true
  })

  
  <%= schema %>.associate = models => {
    <%= schema %>.belongsTo(models.User, {
      targetKey:'id',
      foreignKey:{
        name     :'userId',
        type     :DataTypes.UUID,
        //allowNull:false
      },
      //'onDelete':'SET NULL', //RESTRICT, CASCADE, SET DEFAULT
      //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT
      
    }) //this will give a foreign key to user here, and make it available from here
    //models.User.hasMany(<% schema %>) //this will give this model a UserId field and make it available from user
    //The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).
    //The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
    //The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
    //These three calls will cause Sequelize to automatically add foreign keys to the appropriate models (unless they are already present).
    //The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B, using table C as junction table, which will have the foreign keys (aId and bId, for example). Sequelize will automatically create this model C (unless it already exists) and define the appropriate foreign keys on it.
  }

  return <%= schema %>

  //<%= schema %>.addHook('afterCreate', 'hookName', (e, options) => {})
}


