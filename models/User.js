module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      passwd: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: "Users", // 테이블 이름 정의
      timestamps: false, // createAt, updateAt 활성화
      paranoid: false, // deleteAt 옵션
    }
  );

  return Users;
};
