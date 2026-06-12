import{a7 as t}from"./iframe-DWR_BPge.js";import{S as b}from"./ArrowRedo-DNPhmF0p.js";import{S as v}from"./EyeClosed-BWT-5Xcb.js";import{S as I}from"./Archive-t07JtCRk.js";import{S as k}from"./Trash-D3VLDrQo.js";import{S as w}from"./ClockDashed-BuHgNuyH.js";import{C as i}from"./ContextMenu-DE4xWtGE.js";import{i as l}from"./inboxSearchResults-DEciBA5Y.js";import{S as u}from"./TeddyBear-wsunI1tf.js";import{L as x}from"./List-CSRccNVp.js";import{D as d}from"./DialogListItem-DiUlI1oV.js";import{L as g}from"./ListItem-DKhaVzxg.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CeHTZ23v.js";import"./Dropdown-DtgTj7aV.js";import"./SearchField-MQHHZ8_3.js";import"./MagnifyingGlass-G_PIqG58.js";import"./FieldBase-BMAVe4Iy.js";import"./Typography-Ck9DnhQz.js";import"./useHighlightedText-CxSGKcWS.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./useMenu-D6mVZHWX.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./ItemMedia-CNbHl28k.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./Heading-DZv3ITVf.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ChevronRight-Byhvri5k.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";import"./MenuElipsisHorizontal-DiWRRmpM.js";import"./dialogs-JBxKWUA7.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CQXzoKtI.js";import"./AttachmentList-BVgp_56Y.js";import"./AttachmentLink-A146xEe3.js";import"./File-CX8eDPR2.js";import"./Section-BCFzX2B1.js";import"./Flex-6ZJb0CGr.js";import"./TransmissionList-DiI-nBsG.js";import"./Transmission-PseeLCc1.js";import"./SeenByLog-DzRvk9Lv.js";import"./SeenByLogButton-Ddx4hHIJ.js";import"./SeenByLogItem-bJ4ypYQ2.js";import"./Byline-CHZhg7wc.js";import"./Divider-Dr2O11m-.js";import"./DialogActions-Dd7IoM0J.js";import"./ButtonGroupDivider-D4r8VyyV.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./DropdownBase-4OvEFRWY.js";import"./useClickOutside-DkNsGdGj.js";import"./ButtonGroup-BQ7wgDtN.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Cw7jbG4w.js";import"./ItemLink-DjqXhCHd.js";import"./DialogByline-B5tO_3lr.js";import"./DialogMetadata-D2_0ZeJz.js";import"./DialogStatus-CCPvu16I.js";import"./MetaItem-BHytzGDH.js";import"./ProgressIcon-BP3cea7Z.js";import"./Paperclip-CZMsVYgy.js";import"./Files-DX1M06Ks.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
