/* <%= pkg %> <%= version %> */
import { Sequelize, Model } from 'sequelize'

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
      type: Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      //type: Sequelize.DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey:true,
      allowNull:false,
    },
    a: {
      type: Sequelize.DataTypes.STRING,
      //type: Sequelize.DataTypes.BOOLEAN,
      //type: Sequelize.DataTypes.INTEGER,
      //type: Sequelize.DataTypes.BIGINT,
      //type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue:'john',
      //unique:true
      //field:'column_name_here'
    },

    b: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false,
      //field:'column_name_here'
    },

    _string:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.STRING, ['name']),
      get :function() {
        return this.get('name').slice(0,20)
      }
    },
  
    /*
    uuid:{
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    */
  },{
    sequelize,
    modelName:'<%= schema %>',
    tableName: '<%= localpkg %>_<%= lower_plural %>',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
    //freezeTableName: true
  })

  
  <%= schema %>.associate = models => {
    <%= schema %>.belongsTo(models.User, {
      as:'user',
      targetKey:'id',
      foreignKey:{
        name     :'userId',
        type     :Sequelize.DataTypes.UUID,
        //allowNull:false
      },
      //'onDelete':'SET NULL', //RESTRICT, CASCADE, SET DEFAULT
      //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT
      
    }) //this will create a foreign key to user in the <%= schema%> model, and make it possible to query from here

    models.User.hasOne(<%= schema %>, {
      as:'<%= lower %>',
      targetKey:'id',
      foreignKey:{
        name     :'userId',
        type     :Sequelize.DataTypes.UUID,
        //allowNull:false
      },
      //'onDelete':'SET NULL', //RESTRICT, CASCADE, SET DEFAULT
      //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT
      
    }) //this will add to the user model the possibility to auery based on the foreign key, which is still defined in the <%= schema %> model
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


