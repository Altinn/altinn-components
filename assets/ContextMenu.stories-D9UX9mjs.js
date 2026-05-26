import{p as t}from"./iframe-a6n42jIx.js";import{S as b}from"./ArrowRedo-BnbrKyQg.js";import{S as v}from"./EyeClosed-b6XBEaHm.js";import{S as I}from"./Archive-C-KNrort.js";import{S as k}from"./Trash-BiwQCIF6.js";import{S as w}from"./ClockDashed-D-ph8zZH.js";import{C as r}from"./ContextMenu-D_LAygeA.js";import{i as l}from"./inboxSearchResults-DrIB9x97.js";import{S as u}from"./TeddyBear-CJxuaVNv.js";import{L as x}from"./List-COoWd7bx.js";import{D as d}from"./DialogListItem-BVzP8ll-.js";import{L as g}from"./ListItem-CKB37Xdc.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-JsUrCC3L.js";import"./useDropdownMenuController-ChUHZsVx.js";import"./Dropdown-MBw9TKMx.js";import"./index-D2z1-3lt.js";import"./Button-DYhT04-k.js";import"./tooltip-D8RdZxwd.js";import"./XMark-ENWUN_kz.js";import"./SearchField-Cpk_dpFX.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./useHighlightedText-Bq-Ej33u.js";import"./Skeleton-BMznOa58.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./useMenu-BnSKl7OB.js";import"./MenuListItem-BG5nT3q2.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./MenuItem-DlDQtEmE.js";import"./ItemMedia-9TYJyMgm.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Icon-C2KYL6xM.js";import"./Checkmark-NdO0COsu.js";import"./Heading-Dza3pExo.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./ChevronRight-DzQRiVjQ.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./MenuElipsisHorizontal-B575Bwb2.js";import"./dialogs-CfXS3tUr.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C5PnheKJ.js";import"./AttachmentList-BkzTBqSu.js";import"./AttachmentLink-BaVfB-gt.js";import"./Section-SbJC69tZ.js";import"./Flex-BTGTFkLF.js";import"./TransmissionList-DsfpoeYU.js";import"./Transmission-BKyBQbRy.js";import"./SeenByLog-B5bK2jdJ.js";import"./SeenByLogButton-J9nO15zf.js";import"./SeenByLogItem-CHVx4TK5.js";import"./Byline-ByWU9zoP.js";import"./Divider-C9QIo7Lb.js";import"./DialogActions-CiRDB2Nd.js";import"./ButtonGroupDivider-Bgl5eh5n.js";import"./ChevronUp-DaZVux3Q.js";import"./ChevronDown--dIT-Lld.js";import"./DropdownBase-RTMfhc2P.js";import"./useClickOutside-1UH_0vjU.js";import"./ButtonGroup-r8c9eAn-.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemLink-BU8f8KGB.js";import"./DialogByline-BBkuGul4.js";import"./DialogMetadata-F_q8NyYW.js";import"./DialogStatus-fDTddun1.js";import"./MetaItem-BD3_j1Ky.js";import"./ProgressIcon-aB570L9Y.js";import"./Paperclip-BRGVjuSY.js";import"./Files-DnejBk2A.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Nt as __namedExportsOrder,Jt as default};
