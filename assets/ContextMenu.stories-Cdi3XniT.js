import{a7 as t}from"./iframe-Drliw4W2.js";import{S as b}from"./ArrowRedo-BJyCcmxe.js";import{S as v}from"./EyeClosed-Dt6d24w7.js";import{S as I}from"./Archive-CSI-M84_.js";import{S as k}from"./Trash-fPJYexBH.js";import{S as w}from"./ClockDashed-CsZ31Wkx.js";import{C as n}from"./ContextMenu-XpuA0EJC.js";import{i as l}from"./inboxSearchResults--NM56me5.js";import{S as u}from"./TeddyBear-H1Fj2ZOj.js";import{L as x}from"./List-_2Jr2q9P.js";import{D as d}from"./DialogListItem-C-MpUey3.js";import{L as g}from"./ListItem-Df4h6uIX.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CymhG5YZ.js";import"./Dropdown-B9PzuGtE.js";import"./SearchField-42vl3Hhr.js";import"./MagnifyingGlass-Dg8GT9AE.js";import"./FieldBase-XimphOI7.js";import"./Typography-DpltYWx0.js";import"./useHighlightedText-Cu370CX4.js";import"./Field-m4myDHlq.js";import"./Label-B3MuHrJK.js";import"./Input-BD6Nzkxf.js";import"./useMenu-DH_c0Y1A.js";import"./MenuListItem-BLBbt-OG.js";import"./MenuListDivider-Bm7Xh7zM.js";import"./MenuListHeading-B-ydP8rv.js";import"./MenuItem-CDxKhji-.js";import"./ItemMedia-BONexNJs.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./Checkmark-cWANswWC.js";import"./ItemLabel-L3oJYJ9M.js";import"./Heading-CnkMiV4w.js";import"./ItemControls-CQnobUv3.js";import"./Badge-CrnK53sw.js";import"./Tooltip-DP9V_ar-.js";import"./ChevronRight-_-mAy6yU.js";import"./InformationSquare-DpTm6Ali.js";import"./MenuElipsisHorizontal-kdZIghGy.js";import"./dialogs-nMzRntaP.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-knNvBTjO.js";import"./AttachmentList-KgWnkVhm.js";import"./AttachmentLink-DGWPwyy6.js";import"./File-Hl4JhrQ9.js";import"./Section-zMN4ePg0.js";import"./Flex-Bge8S33P.js";import"./TransmissionList-ykp9HW3s.js";import"./Transmission-BniPoGB1.js";import"./SeenByLog-PqHpWz0G.js";import"./SeenByLogItem-CvB-ttFm.js";import"./Byline-rCAiTbRr.js";import"./SeenByLogButton-Cu3cZ8Ze.js";import"./Divider-h1zWDTZp.js";import"./DialogActions-B8tJwraq.js";import"./ButtonGroupDivider-DYGMewVM.js";import"./ChevronUp-W1N7Dm2d.js";import"./ChevronDown-CG1jtrk-.js";import"./DropdownBase-B8wMCzbA.js";import"./useClickOutside-BJKbZXve.js";import"./ButtonGroup-DIwL-jQY.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Dw5k1qmp.js";import"./ItemLink-QPNf1VCw.js";import"./DialogByline-BTyFvDVY.js";import"./DialogMetadata-DPXoT4zA.js";import"./DialogStatus-N2kDRsvk.js";import"./Paperclip-DKUSeylD.js";import"./Files-Dy7ra0rj.js";import"./MetaBase-KNZYlpEq.js";import"./MetaItem-BoaueIS-.js";import"./ProgressIcon-z3QXeKc1.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
