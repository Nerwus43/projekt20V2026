import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TeamMember } from '../core/task.model';
import { TaskStoreService } from '../core/task-store.service';

@Component({
  selector: 'app-team-management-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './team-management-page.component.html',
  styleUrl: './management-page.component.css',
})
export class TeamManagementPageComponent {
  protected readonly store = inject(TaskStoreService);
  protected editingMemberId: string | null = null;
  protected memberForm = this.emptyMemberForm();

  protected startAdd(): void {
    this.editingMemberId = null;
    this.memberForm = this.emptyMemberForm();
  }

  protected startEdit(member: TeamMember): void {
    this.editingMemberId = member.id;
    this.memberForm = {
      name: member.name,
      role: member.role,
      focus: member.focus,
      responsibility: member.responsibility,
    };
  }

  protected saveMember(): void {
    const member = {
      name: this.memberForm.name.trim(),
      role: this.memberForm.role.trim(),
      focus: this.memberForm.focus.trim(),
      responsibility: this.memberForm.responsibility.trim(),
    };

    if (!member.name || !member.role || !member.focus || !member.responsibility) {
      return;
    }

    if (this.editingMemberId) {
      this.store.updateMember(this.editingMemberId, member);
    } else {
      this.store.addMember(member);
    }

    this.startAdd();
  }

  protected deleteMember(memberId: string): void {
    this.store.deleteMember(memberId);
    if (this.editingMemberId === memberId) {
      this.startAdd();
    }
  }

  private emptyMemberForm() {
    return {
      name: '',
      role: '',
      focus: '',
      responsibility: '',
    };
  }
}
