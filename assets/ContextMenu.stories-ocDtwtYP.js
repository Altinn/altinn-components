import{a7 as t}from"./iframe-CH-Rf2AI.js";import{S as b}from"./ArrowRedo-D1NNhxuU.js";import{S as v}from"./EyeClosed-D7ojKY--.js";import{S as I}from"./Archive-hrfshYGt.js";import{S as k}from"./Trash-BAmIqX5W.js";import{S as w}from"./ClockDashed-An8qJSBT.js";import{C as i}from"./ContextMenu-ClDw9k8P.js";import{i as l}from"./inboxSearchResults-amLlYWVG.js";import{S as u}from"./TeddyBear-Dm8mHfa4.js";import{L as x}from"./List-CaklY40z.js";import{D as d}from"./DialogListItem-lTyG-6GW.js";import{L as g}from"./ListItem-CmAPlNYB.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./SearchField-Dm3ERjlY.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./FieldBase-BRTqs99O.js";import"./Typography-CqA3kMNv.js";import"./useHighlightedText-DIHcSE2r.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./useMenu-FkcUMU_-.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuListHeading-DRQf-aXW.js";import"./MenuItem-BWxi170U.js";import"./ItemMedia-BczcOirL.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./Heading-BVqV7FRe.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./ChevronRight-uifDbL9f.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./MenuElipsisHorizontal-BHY8BNqA.js";import"./dialogs-DFQ6x-G7.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DyfXYb59.js";import"./AttachmentList-BeWV4HSA.js";import"./AttachmentLink-Bwc3jHV1.js";import"./File-GrIKxarG.js";import"./Section-DzGR-IUh.js";import"./Flex-BtYwPl5t.js";import"./TransmissionList-BDEV9w4L.js";import"./Transmission-CmmbXN7u.js";import"./SeenByLog-BtPgYhmU.js";import"./SeenByLogButton-DNl12J2K.js";import"./SeenByLogItem-BJeKmqTq.js";import"./Byline-BShusoze.js";import"./Divider-JWvspdMS.js";import"./DialogActions-HOWhrIo5.js";import"./ButtonGroupDivider-h_7e4qvH.js";import"./ChevronUp-COzX9VRs.js";import"./ChevronDown-D_JnpA4f.js";import"./DropdownBase-Bunv_RaZ.js";import"./useClickOutside-BQ2eQyrb.js";import"./ButtonGroup-6-1iOFaS.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-B9tNoNOm.js";import"./ItemLink-FshzAh5h.js";import"./DialogByline-BRakgzQq.js";import"./DialogMetadata-C4RJ02Ld.js";import"./DialogStatus-B97Ur6iM.js";import"./MetaItem-BoPefSDZ.js";import"./ProgressIcon-CrVdEpMP.js";import"./Paperclip-HsR2VBMP.js";import"./Files-Q69cdbAP.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
