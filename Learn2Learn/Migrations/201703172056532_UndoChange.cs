namespace Learn2Learn.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UndoChange : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Results", name: "ApplicationUser_Id", newName: "UserId");
            RenameIndex(table: "dbo.Results", name: "IX_ApplicationUser_Id", newName: "IX_UserId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Results", name: "IX_UserId", newName: "IX_ApplicationUser_Id");
            RenameColumn(table: "dbo.Results", name: "UserId", newName: "ApplicationUser_Id");
        }
    }
}
