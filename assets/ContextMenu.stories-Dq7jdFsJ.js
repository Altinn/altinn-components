import{j as t}from"./iframe-xsOFb0qB.js";import{S as b}from"./ArrowRedo-BL3Ky4XE.js";import{S as v}from"./EyeClosed-C2yXCNKM.js";import{S as I}from"./Archive-B1CaQo-V.js";import{S as k}from"./Trash-CZXvsvHs.js";import{S as w}from"./ClockDashed-B79nfQIW.js";import{S as l}from"./TeddyBear-kgPBu5M0.js";import{i as u}from"./inboxSearchResults-1l_DqzCg.js";import{C as r}from"./ContextMenu-BmVXKH9P.js";import{L as x}from"./List-BS8-H1t5.js";import{L as d}from"./ListItem-BXgv5KEl.js";import{D as g}from"./DialogListItem-CNZExpCv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BSkX16Wf.js";import"./dialogs-1vH9YUKP.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DGt5lJg5.js";import"./AttachmentList-CKQKqNrn.js";import"./AttachmentLink-DGFW8mhL.js";import"./Icon-Bfs0jdaJ.js";import"./index-C2Njje4x.js";import"./Skeleton-DBfNAA4T.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./Section-B92vWqdI.js";import"./Flex-D9aEciRT.js";import"./Heading-CKV0OzUJ.js";import"./useHighlightedText-DlnkJmvJ.js";import"./TransmissionList-Bum0VLyg.js";import"./Transmission-BS6ozra4.js";import"./Typography-Bx2c3_US.js";import"./SeenByLog-CiSAiHvw.js";import"./SeenByLogButton-CHE47f19.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Avatar-n4A0Yiev.js";import"./SeenByLogItem-D6E-Njcg.js";import"./Byline-B4P4G46m.js";import"./Divider-ChjlQzsl.js";import"./DialogActions-D_VPqaGP.js";import"./ButtonGroupDivider-Di2QHo3H.js";import"./ChevronUp-DtTCTXgH.js";import"./ChevronDown-DgTX1k3o.js";import"./DropdownBase-SLmvTemu.js";import"./useClickOutside-GW5UhJzK.js";import"./ButtonGroup-C6oYdo0U.js";import"./SearchField-CkGqv4yc.js";import"./MagnifyingGlass--8bC5kd2.js";import"./XMark-CIyVPbna.js";import"./FieldBase-CVHmMMmY.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./Checkmark-Bxt0Ippd.js";import"./ItemControls-a4lEiOE5.js";import"./ChevronRight-C-KQY4Ee.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-B1fyKvdT.js";import"./Dropdown-DSeVnfau.js";import"./MenuElipsisHorizontal-KvoLWB-I.js";import"./ItemLink-D5ErANnm.js";import"./DialogByline-DGLZl0Pp.js";import"./DialogMetadata-DTHseOk8.js";import"./DialogStatus-G-qQI2J-.js";import"./MetaItem-DhjQRQal.js";import"./ProgressIcon-DjbhfYbU.js";import"./Paperclip-7kfbi6pN.js";import"./Files-ChM2sBt6.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
