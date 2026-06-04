import{a7 as t}from"./iframe-bg3nhc5C.js";import{S as b}from"./ArrowRedo-Bsc9kDLk.js";import{S as v}from"./EyeClosed-yXVOQ8wy.js";import{S as I}from"./Archive-CB_LO-X7.js";import{S as k}from"./Trash-Dwyh85Wc.js";import{S as w}from"./ClockDashed-qgCdVrzi.js";import{C as n}from"./ContextMenu-BEQqNyYm.js";import{i as l}from"./inboxSearchResults-D0jthyED.js";import{S as u}from"./TeddyBear-EUGakYVw.js";import{L as x}from"./List-v1Yie3cK.js";import{D as d}from"./DialogListItem-B_EVe6Or.js";import{L as g}from"./ListItem-Dk0WBAMJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CwIh1DiK.js";import"./Dropdown-CqGqZ6my.js";import"./SearchField-CjXdfZ37.js";import"./MagnifyingGlass-C3fVRdM8.js";import"./FieldBase-CPws21pp.js";import"./Typography-Ci1MUa-H.js";import"./useHighlightedText-Ct2V138i.js";import"./Field-DXeetSkN.js";import"./Label-BY0S3EO2.js";import"./Input-ByvRROIc.js";import"./useMenu-DS82y3su.js";import"./MenuListItem-f8-xfgbP.js";import"./MenuListHeading-CPNZr4rU.js";import"./MenuItem-Dnd2bkX1.js";import"./ItemMedia-CxijgI7U.js";import"./Avatar-BnkW8VAf.js";import"./AvatarGroup-BUxzP8KS.js";import"./Checkmark-D_j4oKhD.js";import"./ItemLabel-D9bNrZqJ.js";import"./Heading-CqXKSZEg.js";import"./ItemControls-vsK4YZNK.js";import"./Badge-hZ6rpuJP.js";import"./Tooltip-BG2MYXE2.js";import"./ChevronRight-fbKP0qVJ.js";import"./index-cKgDDIaZ.js";import"./InformationSquare-BrXIcqKH.js";import"./MenuElipsisHorizontal-CKVexCzt.js";import"./dialogs-B8s8O0Mz.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DMlaQUoP.js";import"./AttachmentList-bkebCOcN.js";import"./AttachmentLink-CdSGf16s.js";import"./File-CZS7UAXf.js";import"./Section-0QuSZB3S.js";import"./Flex-CxgPTFrH.js";import"./TransmissionList-CHNvi757.js";import"./Transmission-BQNngsEj.js";import"./SeenByLog-DtBKtq2O.js";import"./SeenByLogButton-PV0ipSH_.js";import"./SeenByLogItem-B4uKTCZg.js";import"./Byline-B0jov5iH.js";import"./Divider-CjoRgoCi.js";import"./DialogActions-V88Fr9qI.js";import"./ButtonGroupDivider-Cye-61mv.js";import"./ChevronUp-DDZW1UU0.js";import"./ChevronDown-DjIEzGIr.js";import"./DropdownBase-ZkFU3ImR.js";import"./useClickOutside-C7isuCpS.js";import"./ButtonGroup-BzB2tyZw.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-D5zPuNeb.js";import"./ItemLink-Cxg09-QY.js";import"./DialogByline-CuC6Ls0n.js";import"./DialogMetadata-Dt5q-a0p.js";import"./DialogStatus-CG_GM2yK.js";import"./MetaItem-BHADNer2.js";import"./ProgressIcon-OWiYVPiZ.js";import"./Paperclip-8j0w26RA.js";import"./Files-BwIlgDwb.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,zt as __namedExportsOrder,Yt as default};
