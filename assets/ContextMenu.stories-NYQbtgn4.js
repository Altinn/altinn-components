import{a7 as t}from"./iframe-BBxI6Qoj.js";import{S as b}from"./ArrowRedo-CGOE_50Y.js";import{S as v}from"./EyeClosed-B2OlLWHw.js";import{S as I}from"./Archive-Ck8OpCyR.js";import{S as k}from"./Trash-DJ7iEv1M.js";import{S as w}from"./ClockDashed-UgLJnkT3.js";import{C as i}from"./ContextMenu-DnwF159F.js";import{i as l}from"./inboxSearchResults-D6In-bCQ.js";import{S as u}from"./TeddyBear-DSLSgraD.js";import{L as x}from"./List-DiWMXlPH.js";import{D as d}from"./DialogListItem-DzjfqsAe.js";import{L as g}from"./ListItem-B7vm1DNV.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BP3UF-Yt.js";import"./Dropdown-BGDRJ2sL.js";import"./SearchField-CTzRwjSn.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./FieldBase-De9CwOeM.js";import"./Typography-DsE98WBK.js";import"./useHighlightedText-CESRz6Ap.js";import"./Field-CklQ3uRY.js";import"./Label-DAepOqrA.js";import"./Input-C6iRvbsc.js";import"./useMenu-B76EeFEP.js";import"./MenuListItem-D68tduCT.js";import"./MenuListHeading-lkQwQf3s.js";import"./MenuItem-B1Q66lNx.js";import"./ItemMedia-vu0P71y8.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./Checkmark-CSwkO33y.js";import"./ItemLabel-2sb7Udx3.js";import"./Heading-D61lhVl1.js";import"./ItemControls-BooS5V5d.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./ChevronRight-DVToFFYf.js";import"./index-CrzqWcTU.js";import"./InformationSquare-DpMeWUxz.js";import"./MenuElipsisHorizontal-D2O7BZ44.js";import"./dialogs-DkxYfE6o.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D1ByNNeT.js";import"./AttachmentList-DskCyuTv.js";import"./AttachmentLink-6bRHStwq.js";import"./File-BgPBJb9D.js";import"./Section-2oE2jyh4.js";import"./Flex-DehNIx1U.js";import"./TransmissionList-ENWqFlRS.js";import"./Transmission-DrDMIQmH.js";import"./SeenByLog-vsgZAiWQ.js";import"./SeenByLogButton-5L-PoIgV.js";import"./SeenByLogItem-j_2MXsNX.js";import"./Byline-Ct3bE_id.js";import"./Divider-DvhrIdJ9.js";import"./DialogActions-DJfIu3c8.js";import"./ButtonGroupDivider-Cu1p1-tn.js";import"./ChevronUp-3jRKbU-M.js";import"./ChevronDown-BJPfgMjs.js";import"./DropdownBase-B6BYa1ga.js";import"./useClickOutside-COvUXh-C.js";import"./ButtonGroup-xNpv9tyz.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-z_U1AOBq.js";import"./ItemLink-Cj4Bv3sX.js";import"./DialogByline-CTlDJ9L5.js";import"./DialogMetadata-BjFs_NGi.js";import"./DialogStatus-CLX_WEkF.js";import"./MetaItem-qmaGWC8l.js";import"./ProgressIcon-CrmoUlAy.js";import"./Paperclip-Bo0nfGg_.js";import"./Files-D_Hooqlz.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
