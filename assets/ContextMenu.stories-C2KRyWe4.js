import{j as t}from"./iframe-Bs6hWG43.js";import{S as b}from"./ArrowRedo-sEWImUqb.js";import{S as v}from"./EyeClosed-CSsczDPP.js";import{S as I}from"./Archive-9LOoqKn0.js";import{S as k}from"./Trash-DPxs7CFK.js";import{S as w}from"./ClockDashed-J7vnxwTt.js";import{S as l}from"./TeddyBear-B2mybRvI.js";import{i as u}from"./inboxSearchResults-OjYEKx7F.js";import{C as r}from"./ContextMenu-omWY5r2y.js";import{L as x}from"./List-DX6kg0jD.js";import{L as d}from"./ListItem-CFwb-TRN.js";import{D as g}from"./DialogListItem-ArkcaFEi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-eW1Sa_eP.js";import"./dialogs-D7bfU15m.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-PW1gZVMd.js";import"./AttachmentList-D-eS-BzG.js";import"./AttachmentLink-DrVlMbUQ.js";import"./Icon-DjH00Hl5.js";import"./index-DbNSDn3W.js";import"./Skeleton-7NyHq6Da.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./Section-W4Lgx5KJ.js";import"./Flex-DYzITT_K.js";import"./Heading-C3DAZ3La.js";import"./useHighlightedText-ByR3-iok.js";import"./TransmissionList-TyafGVvN.js";import"./Transmission-DZbxGSOs.js";import"./Typography-4Wb6MR64.js";import"./SeenByLog-CpH42DYx.js";import"./SeenByLogButton-CEXxbU1P.js";import"./Button-eHvnmE12.js";import"./button-BtRKSTW7.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Avatar-BN7VNN79.js";import"./SeenByLogItem-BCgSWVZ4.js";import"./Byline-_MWix_tH.js";import"./Divider-CZVrRyv9.js";import"./DialogActions-IqaDobfV.js";import"./ButtonGroupDivider-FKdNiVfP.js";import"./ChevronUp-C8EAI3hT.js";import"./ChevronDown-DB4qADPw.js";import"./DropdownBase-C2tKa_m5.js";import"./useClickOutside-ByRbMqF_.js";import"./ButtonGroup-eeakMgVk.js";import"./SearchField-CTJqYruH.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./XMark-Cx14Anho.js";import"./FieldBase-BwWmF8XK.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./Checkmark-YSQh9b-J.js";import"./ItemControls-CsoavSOP.js";import"./ChevronRight-Xe9lB9nu.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-D42biJGY.js";import"./Dropdown-z94Rg748.js";import"./MenuElipsisHorizontal-yOcHxLrU.js";import"./ItemLink-kBPqIX3U.js";import"./DialogByline-Dg8nOq0w.js";import"./DialogMetadata-BpH7ZUMo.js";import"./DialogStatus-BM4CZtzK.js";import"./MetaItem-DbGnsLhd.js";import"./ProgressIcon-Bq1uPRAi.js";import"./Paperclip-C8Xj9F1x.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
