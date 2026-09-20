import{a7 as t}from"./iframe-ypmT5Gk0.js";import{S as b}from"./ArrowRedo-HNcxgeua.js";import{S as v}from"./EyeClosed-DZja7XUU.js";import{S as I}from"./Archive-D57uYDfd.js";import{S as k}from"./Trash-CccdzDMj.js";import{S as w}from"./ClockDashed-Bl3VtxuG.js";import{C as n}from"./ContextMenu-D5kYo8B_.js";import{i as l}from"./inboxSearchResults-DWOJHIwf.js";import{S as u}from"./TeddyBear-9wqIwyQ8.js";import{L as x}from"./List-Cf_BolQ2.js";import{D as d}from"./DialogListItem-DXv0fH3H.js";import{L as g}from"./ListItem-BwY6iPn6.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Bdups_kS.js";import"./Dropdown-DooXOQKf.js";import"./SearchField-gC-2ROHv.js";import"./MagnifyingGlass-BsJL0696.js";import"./FieldBase-BZNWpkh0.js";import"./Typography-D_BM_-lf.js";import"./useHighlightedText-BRp5NYS8.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";import"./useMenu-Roya_qW1.js";import"./MenuListItem-aY-AAikt.js";import"./MenuListDivider-p3sa3VdL.js";import"./MenuListHeading-j9n_Lc05.js";import"./MenuItem-CZo5oRhh.js";import"./ItemMedia-4IfksOuS.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./Checkmark-kMy6EMLN.js";import"./ItemLabel-BlYQpqbv.js";import"./Heading-DYP7M4_m.js";import"./ItemControls-Bqvxib6z.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./ChevronRight-3_fnpscT.js";import"./InformationSquare-BGmi6Zvl.js";import"./MenuElipsisHorizontal-7XqACgFh.js";import"./dialogs-CSfqlKma.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BcNAdXiI.js";import"./AttachmentList-BO16r-Lf.js";import"./AttachmentLink-Dz7oBAC6.js";import"./File-9SorHaEc.js";import"./Section-DHk6b8dD.js";import"./Flex-Chd0QM3i.js";import"./TransmissionList-COWMQG8W.js";import"./Transmission-CLK8dx8s.js";import"./SeenByLog-DGg7yLUM.js";import"./SeenByLogItem-CAQun9F9.js";import"./Byline-DpOxNcqU.js";import"./SeenByLogButton-QHtIvJwM.js";import"./Divider-BjtaC-QR.js";import"./DialogActions-C500cTub.js";import"./ButtonGroupDivider-C43QU8jH.js";import"./ChevronUp-BtRg68CV.js";import"./ChevronDown-BK7qLjN-.js";import"./DropdownBase-j72W2v_8.js";import"./useClickOutside-I_3xNTTG.js";import"./ButtonGroup-CRz61zp4.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DYa9_HNX.js";import"./ItemLink-rWBtZ4Hb.js";import"./DialogByline-DW9agbZn.js";import"./DialogMetadata-BjzYPP5M.js";import"./DialogStatus-DfQ2J--6.js";import"./Paperclip-EVKWH_aP.js";import"./Files-Xy9PYQLk.js";import"./MetaBase-DPat0jZh.js";import"./MetaItem-B3SdI3dX.js";import"./ProgressIcon-J8Sx4UEX.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
