var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a5 as e}from"./iframe-k-5ppgch.js";import{S as I}from"./ArrowRedo-BdVHHvaA.js";import{S as k}from"./EyeClosed-D_OleM4p.js";import{S as w}from"./Archive-mZAeZsrq.js";import{S as B}from"./Trash-D-Jav_7z.js";import{S as D}from"./ClockDashed-KjzK9RZG.js";import{C as a}from"./ContextMenu-3vKarXaG.js";import{i as u}from"./inboxSearchResults-GPmOi_bL.js";import{S as d}from"./TeddyBear-DRMHsDl_.js";import{L as h}from"./List-CFuxNT_P.js";import{D as g}from"./DialogListItem-CmwINRUM.js";import{L as y}from"./ListItem-BtyqlbRy.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-OiRVKnjj.js";import"./Dropdown-CPtynmaA.js";import"./SearchField-BRPq9oj8.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListHeading-DOGIQowl.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ItemLabel-D5iTgQt_.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronRight-CDNE03o8.js";import"./FieldBase-CXS3Sevu.js";import"./Typography-CYRWqnkB.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./useMenu-DQYhP48A.js";import"./MenuListDivider-BXcHHiOJ.js";import"./InformationSquare-C8JQXppp.js";import"./MenuElipsisHorizontal-B7A4Qcki.js";import"./dialogs-XhQtPZ9_.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-_4Qgi5i4.js";import"./AttachmentList-CWVZk_GU.js";import"./AttachmentLink-2KVfGVH_.js";import"./File-Ctzq2ENx.js";import"./Section-QDM_T_oE.js";import"./Flex-DfG9uaWh.js";import"./TransmissionList-CxMtqxwd.js";import"./Transmission-C19_lOLs.js";import"./SeenByLog-C3cBvf5R.js";import"./SeenByLogItem-HLjw3-dl.js";import"./Byline-CLp65Fpk.js";import"./SeenByLogButton-CcJ_M8xq.js";import"./Divider-BsUeBbrl.js";import"./DialogActions-BbrOmMBr.js";import"./ButtonGroup-B2jA2Tqh.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-C_ikRmi3.js";import"./ItemLink-CIk1xtvG.js";import"./DialogByline-Dsz619xV.js";import"./DialogMetadata-ClUWer6J.js";import"./DialogStatus-DsPMyZDj.js";import"./Paperclip-B3DjPXiP.js";import"./Files-DKWN8ubK.js";import"./Checkmark-F2mBpe6M.js";import"./MetaBase-DC4aLZSq.js";import"./MetaItem-DtKwP5SB.js";import"./ProgressIcon-BOtZ4ykM.js";import"./ChevronUp-gL_c1moU.js";import"./ChevronDown-l3Tycs4Q.js";const{expect:m,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},s={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await m(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await m(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Nt=["Default","ListControls","DialogControls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};export{s as Default,p as DialogControls,c as ListControls,Nt as __namedExportsOrder,Jt as default};
