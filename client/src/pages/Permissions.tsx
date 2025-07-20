import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Eye, Shield, Users, ArrowDown, Settings, Play, Copy } from "lucide-react";

type Role = "Brand Manager" | "Editor" | "Contributor" | "Viewer";
type Permission = "Edit Logo" | "Change Colors" | "Modify Layout" | "Access Analytics" | "Export Templates" | "Manage Users" | "View Reports" | "Edit Content";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: Role;
}

interface PermissionMatrix {
  [key: string]: Permission[];
}

const Permissions = () => {
  const [selectedRole, setSelectedRole] = useState<Role>("Brand Manager");
  const [previewMode, setPreviewMode] = useState(false);

  const users: User[] = [
    { id: "1", name: "Sarah Johnson", email: "sarah@company.com", role: "Brand Manager" },
    { id: "2", name: "Mike Chen", email: "mike@company.com", role: "Editor" },
    { id: "3", name: "Emma Wilson", email: "emma@company.com", role: "Contributor" },
    { id: "4", name: "David Kumar", email: "david@company.com", role: "Viewer" },
    { id: "5", name: "Lisa Park", email: "lisa@company.com", role: "Editor" },
    { id: "6", name: "Tom Wilson", email: "tom@company.com", role: "Contributor" },
  ];

  const permissions: Permission[] = [
    "Edit Logo",
    "Change Colors", 
    "Modify Layout",
    "Access Analytics",
    "Export Templates",
    "Manage Users",
    "View Reports",
    "Edit Content"
  ];

  const [permissionMatrix, setPermissionMatrix] = useState<PermissionMatrix>({
    "Brand Manager": ["Edit Logo", "Change Colors", "Modify Layout", "Access Analytics", "Export Templates", "Manage Users", "View Reports", "Edit Content"],
    "Editor": ["Change Colors", "Modify Layout", "Export Templates", "View Reports", "Edit Content"],
    "Contributor": ["Edit Content", "View Reports"],
    "Viewer": ["View Reports"]
  });

  const roleColors = {
    "Brand Manager": "bg-primary text-primary-foreground",
    "Editor": "bg-secondary text-secondary-foreground", 
    "Contributor": "bg-accent text-accent-foreground",
    "Viewer": "bg-muted text-muted-foreground"
  };

  const roleHierarchy = ["Brand Manager", "Editor", "Contributor", "Viewer"];

  const hasPermission = (role: Role, permission: Permission): boolean => {
    return permissionMatrix[role]?.includes(permission) || false;
  };

  const togglePermission = (role: Role, permission: Permission) => {
    setPermissionMatrix(prev => {
      const rolePermissions = prev[role] || [];
      const hasPermissionNow = rolePermissions.includes(permission);
      
      if (hasPermissionNow) {
        return {
          ...prev,
          [role]: rolePermissions.filter(p => p !== permission)
        };
      } else {
        return {
          ...prev,
          [role]: [...rolePermissions, permission]
        };
      }
    });
  };

  const getUsersByRole = (role: Role) => {
    return users.filter(user => user.role === role);
  };

  const getInheritedPermissions = (role: Role): Permission[] => {
    const roleIndex = roleHierarchy.indexOf(role);
    const higherRoles = roleHierarchy.slice(0, roleIndex);
    
    const inherited: Permission[] = [];
    higherRoles.forEach(higherRole => {
      permissionMatrix[higherRole]?.forEach(permission => {
        if (!inherited.includes(permission)) {
          inherited.push(permission);
        }
      });
    });
    
    return inherited;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Role-Based Permission Matrix</h1>
              <p className="text-muted-foreground mt-2">Manage user roles and permissions across your organization</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setPreviewMode(!previewMode)}
              >
                <Eye className="w-4 h-4" />
                {previewMode ? "Exit Preview" : "Test Permissions"}
              </Button>
              <Button className="gap-2">
                <Settings className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </div>

          {previewMode && (
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Permission Preview Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <span className="text-sm">Preview as:</span>
                  <Select value={selectedRole} onValueChange={(value: Role) => setSelectedRole(value)}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {roleHierarchy.map(role => (
                        <SelectItem key={role} value={role}>
                          <div className="flex items-center gap-2">
                            <Badge className={roleColors[role as Role]}>{role}</Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="text-sm text-muted-foreground">
                    Showing interface as it would appear for {selectedRole} role
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Users by Role */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Users by Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {roleHierarchy.map(role => (
                    <div key={role} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className={roleColors[role as Role]}>{role}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {getUsersByRole(role as Role).length} users
                        </span>
                      </div>
                      <div className="space-y-2">
                        {getUsersByRole(role as Role).map(user => (
                          <div key={user.id} className="flex items-center gap-3 p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{user.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Permission Matrix */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Permission Matrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-48">Permission</TableHead>
                        {roleHierarchy.map(role => (
                          <TableHead key={role} className="text-center min-w-32">
                            <Badge className={roleColors[role as Role]}>{role}</Badge>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {permissions.map(permission => (
                        <TableRow key={permission}>
                          <TableCell className="font-medium">{permission}</TableCell>
                          {roleHierarchy.map(role => {
                            const isChecked = hasPermission(role as Role, permission);
                            const isInherited = getInheritedPermissions(role as Role).includes(permission);
                            const isDisabled = previewMode && selectedRole !== role;
                            
                            return (
                              <TableCell key={role} className="text-center">
                                <div className="flex items-center justify-center">
                                  <Checkbox
                                    checked={isChecked}
                                    disabled={isDisabled}
                                    onCheckedChange={() => togglePermission(role as Role, permission)}
                                    className={isInherited ? "border-primary" : ""}
                                  />
                                  {isInherited && (
                                    <ArrowDown className="w-3 h-3 ml-1 text-primary" />
                                  )}
                                </div>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 text-xs text-muted-foreground flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ArrowDown className="w-3 h-3 text-primary" />
                    <span>Inherited permission</span>
                  </div>
                  <span>Higher roles automatically inherit permissions from lower roles</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Permission Inheritance Visualization */}
          <Card>
            <CardHeader>
              <CardTitle>Permission Inheritance Hierarchy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-8">
                {roleHierarchy.map((role, index) => (
                  <div key={role} className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center ${roleColors[role as Role]} text-lg font-bold`}>
                        {role.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div className="absolute -bottom-2 -right-2">
                        <Badge variant="outline" className="text-xs">
                          {permissionMatrix[role]?.length || 0}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-sm">{role}</p>
                      <p className="text-xs text-muted-foreground">
                        {getUsersByRole(role as Role).length} users
                      </p>
                    </div>
                    {index < roleHierarchy.length - 1 && (
                      <ArrowDown className="w-6 h-6 text-muted-foreground absolute" style={{
                        left: '50%',
                        top: '100%',
                        transform: 'translateX(-50%) translateY(8px)'
                      }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">Inheritance Rules:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Brand Managers have all permissions by default</li>
                  <li>• Each role inherits permissions from roles below them in the hierarchy</li>
                  <li>• Direct permissions override inherited ones</li>
                  <li>• Changes cascade down to lower roles automatically</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Permissions;