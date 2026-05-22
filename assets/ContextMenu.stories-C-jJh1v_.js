import{j as t}from"./iframe-D-ID03Ik.js";import{S as b}from"./ArrowRedo-Bud7z3d0.js";import{S as v}from"./EyeClosed-DOwnC22s.js";import{S as I}from"./Archive-r1sYcfUF.js";import{S as k}from"./Trash-B9VlyYzI.js";import{S as w}from"./ClockDashed-DmoSeQJX.js";import{S as l}from"./TeddyBear-CjGRGi9D.js";import{i as u}from"./inboxSearchResults-q06nQlAc.js";import{C as r}from"./ContextMenu-CNtum_0S.js";import{L as x}from"./List-C-la8QZt.js";import{L as d}from"./ListItem-x7s3DQfA.js";import{D as g}from"./DialogListItem-KChtGrX7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DxZoCrQU.js";import"./dialogs-CT_fCDC2.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BquwSOgm.js";import"./AttachmentList-BCn5atRO.js";import"./AttachmentLink-rk8xKP8w.js";import"./Icon-CER3YkDn.js";import"./index-DpFyEq-2.js";import"./Skeleton--3bwKnDN.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./tooltip-CH7-mov_.js";import"./Section-Df_v2ciX.js";import"./Flex-pOoXofWS.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./TransmissionList-DSv8XiCH.js";import"./Transmission-qvPBvwJ2.js";import"./Typography-COzCTzPW.js";import"./SeenByLog-B6TW9cx5.js";import"./SeenByLogButton-ByWKkzhq.js";import"./Button-CO1zFGa4.js";import"./AvatarGroup-ZBmyex5T.js";import"./Avatar-CUF81_T9.js";import"./SeenByLogItem-Rkr4mW5x.js";import"./Byline-Di2Y9oZr.js";import"./Divider-CMEwMA07.js";import"./DialogActions-BwVaRTRN.js";import"./ButtonGroupDivider-DHMyJatP.js";import"./ChevronUp-BM7sC8IQ.js";import"./ChevronDown-_u2ch-6C.js";import"./DropdownBase-DetvWPtU.js";import"./useClickOutside-WEeItCEt.js";import"./ButtonGroup-vd8KP0y5.js";import"./SearchField-D--HBqax.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./XMark-DAr8sgUQ.js";import"./FieldBase-DmpPz6xV.js";import"./Label-DsF9mxAr.js";import"./Input-BflTpPuJ.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./Checkmark-WbwQiDGB.js";import"./ItemControls-Bpd8WrWV.js";import"./ChevronRight-CxM-6AgC.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CvvhEQZ7.js";import"./Dropdown-CPTBx2eu.js";import"./MenuElipsisHorizontal-aZjOJxtA.js";import"./ItemLink-CKC9Zcw7.js";import"./DialogByline-C9sKAH6p.js";import"./DialogMetadata-C6vyrDvJ.js";import"./DialogStatus-BT8zNv6q.js";import"./MetaItem-ZBJk5O6w.js";import"./ProgressIcon-CvLHvdor.js";import"./Paperclip-CR_ArcLu.js";import"./Files-Cq94B7HH.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
