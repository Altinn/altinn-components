import{a7 as t}from"./iframe-DdvxY_xq.js";import{S as b}from"./ArrowRedo-DzqtweU9.js";import{S as v}from"./EyeClosed-DrvwWllI.js";import{S as I}from"./Archive-DK4jYBW-.js";import{S as k}from"./Trash-CAj2zqGr.js";import{S as w}from"./ClockDashed-DI-thkp4.js";import{C as i}from"./ContextMenu-CcrpMEqP.js";import{i as l}from"./inboxSearchResults-LG-vXwKF.js";import{S as u}from"./TeddyBear-EwNi3oMH.js";import{L as x}from"./List-D-SdhPLS.js";import{D as d}from"./DialogListItem-D_AE9KyW.js";import{L as g}from"./ListItem-Ct5xEdC8.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BKuLMBHY.js";import"./Dropdown-DHo9FStr.js";import"./SearchField-Cr3Gi8TV.js";import"./MagnifyingGlass-BNJradcO.js";import"./FieldBase-DD97eycm.js";import"./Typography-CUBjJcUl.js";import"./useHighlightedText-BFt57PCX.js";import"./Field-Dc25EUil.js";import"./Label-CJtMWK76.js";import"./Input-2Gn2X0Ml.js";import"./useMenu-Cr8gFQCV.js";import"./MenuListItem-BiOJri4m.js";import"./MenuListHeading-CMTKGvH9.js";import"./MenuItem-L68RSDFn.js";import"./ItemMedia-DUTgrI06.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./Checkmark-DJVRCLhU.js";import"./ItemLabel-C58CsJMo.js";import"./Heading-CE6yLC7h.js";import"./ItemControls-DoOKV45e.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./ChevronRight-C3Cb2zNm.js";import"./index-BdOTeIXC.js";import"./InformationSquare-CvBtG7YX.js";import"./MenuElipsisHorizontal-UkoNHz82.js";import"./dialogs-D9egpOEr.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DN0UPA7w.js";import"./AttachmentList-DLq7ZwFy.js";import"./AttachmentLink-CUXw7c-V.js";import"./File-B7TrALFU.js";import"./Section-lr4hansN.js";import"./Flex-Ban15jaQ.js";import"./TransmissionList-DmZ-seZp.js";import"./Transmission-ymbXfbi0.js";import"./SeenByLog-BuGJFhry.js";import"./SeenByLogButton-D8U4RcET.js";import"./SeenByLogItem-CbQxgbFk.js";import"./Byline-DkezSkLA.js";import"./Divider-CrD6mv7o.js";import"./DialogActions-BRcYitv8.js";import"./ButtonGroupDivider-D9DaMehQ.js";import"./ChevronUp-C_S4jFxx.js";import"./ChevronDown-BoDhB4yd.js";import"./DropdownBase-CHVE-Q_X.js";import"./useClickOutside-CUiD1GEV.js";import"./ButtonGroup-D_joR3q8.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BUxw1lU_.js";import"./ItemLink-S0obXchf.js";import"./DialogByline-BfIVtbk9.js";import"./DialogMetadata-CnG4pcZH.js";import"./DialogStatus-ssn_Im40.js";import"./MetaItem-Clm5EW6Q.js";import"./ProgressIcon-C7KqyFMV.js";import"./Paperclip-DHuhvvk0.js";import"./Files-BEmkLOTv.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
