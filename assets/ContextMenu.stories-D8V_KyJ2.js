import{a7 as t}from"./iframe-DmJr8_aG.js";import{S as b}from"./ArrowRedo-DsLu4IyX.js";import{S as v}from"./EyeClosed-DupNlQXO.js";import{S as I}from"./Archive-TTyNUjQp.js";import{S as k}from"./Trash-BOmSsjSD.js";import{S as w}from"./ClockDashed-DRGVm61A.js";import{C as i}from"./ContextMenu-Ce4MM7JC.js";import{i as l}from"./inboxSearchResults-B-COppnn.js";import{S as u}from"./TeddyBear-CuX8XbFA.js";import{L as x}from"./List-BYhLWM8c.js";import{D as d}from"./DialogListItem-CbachO_-.js";import{L as g}from"./ListItem-8cwJLY10.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-C3IF3Z6L.js";import"./Dropdown-CSc8TyC7.js";import"./SearchField-DIEgnIKm.js";import"./MagnifyingGlass-CtP3bCTw.js";import"./FieldBase-B-b_vsUI.js";import"./Typography-B5vyFnSY.js";import"./useHighlightedText-CDpmDje8.js";import"./Field-z2_rHtRr.js";import"./Label-C9gCQCNv.js";import"./Input-CMjX-VJR.js";import"./useMenu-DCAZlAYS.js";import"./MenuListItem-CfwtrDuI.js";import"./MenuListDivider-DxYIfIoZ.js";import"./MenuListHeading-D4ODluyz.js";import"./MenuItem-BAlZe3i8.js";import"./ItemMedia-BAIJH8U4.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Checkmark-DdnTh1PT.js";import"./ItemLabel-BZFwI3Qg.js";import"./Heading-I9-B5g1d.js";import"./ItemControls-C3FVXvI0.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./ChevronRight-kR30sXpx.js";import"./InformationSquare-BDz-_K2o.js";import"./MenuElipsisHorizontal-BSIPnNnd.js";import"./dialogs-DaCZncEn.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-B-vlMgP1.js";import"./AttachmentList-DNGf5o_g.js";import"./AttachmentLink-DROfO50F.js";import"./File-C6IF3Dkn.js";import"./Section-xPiqNpLG.js";import"./Flex-D91Qf6jp.js";import"./TransmissionList-BR3wEQ1j.js";import"./Transmission-C9UvWZs4.js";import"./SeenByLog-CO9TZ-zE.js";import"./SeenByLogButton-DWaKlpbn.js";import"./SeenByLogItem-BlO-P44H.js";import"./Byline-DuJyYQ2y.js";import"./Divider-Bp9bwdzN.js";import"./DialogActions-BypDbVSu.js";import"./ButtonGroupDivider-Cq1pylXQ.js";import"./ChevronUp-C82RtbQz.js";import"./ChevronDown-hTjRae3D.js";import"./DropdownBase-C3X7BNie.js";import"./useClickOutside-C0lcEhiT.js";import"./ButtonGroup-ps_HIdpu.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DGqNBtsw.js";import"./ItemLink-CF3E9h13.js";import"./DialogByline-ByIkO9VD.js";import"./DialogMetadata-TYFg6YV1.js";import"./DialogStatus-DOCqaqIG.js";import"./MetaItem-BzK9PkZa.js";import"./ProgressIcon-CwT8RcSD.js";import"./Paperclip-DJ1TOqbh.js";import"./Files-4UFVzp3H.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
