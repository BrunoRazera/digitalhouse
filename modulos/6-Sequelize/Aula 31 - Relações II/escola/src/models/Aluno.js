module.exports = (sequelize, dataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    nome: {
      type: dataTypes.STRING,
      allowNull: false
    },

    sobrenome: {
      type: dataTypes.STRING,
      allowNull: false
    },

    ano_matricula: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'alunos',
    timestamps: false
  });

  Aluno.associate = models => {
    Aluno.belongsToMany(models.Turma, {
      foreignKey: 'aluno_id',
      as: 'turmas',
      through: models.AlunoHasTurma
    })
  }

  return Aluno;
}